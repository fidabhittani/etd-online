import {
  SET_VEH,
  SET_TRANSFER,
  SET_TMESLOTS,
  UPDATE_TRANSFER,
  SET_APP,
} from "config/constants";
import request from "service";
import { ApiMethods } from "config/api";
import { setMessage } from "actions";
import { Guid } from "guid-typescript";
import moment from "moment";
const resetAll = () => (dispatch: any) => {
  dispatch(setVehicle({}));
  dispatch(setTransfer({}));
  dispatch(setTimeSlots([]));
};

/**
 *  SET APP
 * @param payload
 */

export const setApp = (payload: any) => {
  return {
    type: SET_APP,
    payload,
  };
};

/** SET VEHICLE */

export const setVehicle = (payload: any) => {
  return {
    type: SET_VEH,
    payload,
  };
};

export const setTransfer = (payload: any) => {
  return {
    type: SET_TRANSFER,
    payload,
  };
};

export const getVeh = (dataIn: any) => async (dispatch: any) => {
  dispatch(resetAll());
  const { data }: any = await request({
    method: "POST",
    url: ApiMethods.GetVehiclePort,
    context: "getVehicle",
    data: {
      ...dataIn,
    },
  });

  const [vehicle]: any = data || [];
  dispatch(setVehicle(vehicle || {}));
};

export const getApp = (dataIn: any) => async (dispatch: any) => {
  dispatch(resetAll());
  const { data }: any = await request({
    method: "POST",
    url: ApiMethods.GetApplication,
    context: "getApplication",
    data: {
      ...dataIn,
    },
  });

  const [app]: any = data || [];
  const {
    VEH_REG_DATE: registrationDate = null,
    VEH_REG_NO: registrationNo = null,
    ...restOfApp
  } = app || {};

  if (registrationDate && registrationNo) {
    dispatch(
      getVeh({
        registrationDate: moment(registrationDate).format("DD-MM-YYYY"),
        registrationNo,
      })
    );
  }

  if (restOfApp) {
    dispatch(setApp(app));
  }

  if (Object.keys(app || {}).length === 0) {
    const messageId: any = Guid.create();

    dispatch(
      setMessage({
        type: "info",
        id: messageId.value,
        context: "header",
        devMessage: "No Application found",
      })
    );
  }

  // dispatch(setVehicle(app || {}));
};

/** Save */
export const saveVeh = (dataIn: any) => async (dispatch: any) => {
  const { data }: any = await request({
    method: "POST",
    url: ApiMethods.SaveVehiclePort,
    context: "app",
    data: {
      meta: {
        ...dataIn,
      },
    },
  });

  const messageId: any = Guid.create();
  const [response]: any = data || [];

  if (response && response.ID) {
    dispatch(
      setMessage({
        type: "success",
        id: messageId.value,
        context: "app",
        devMessage: "Thanks, Information Successfully being saved",
      })
    );
    dispatch(getTimeSlots());
  }
  dispatch(setTransfer(response || {}));
};

const setTimeSlots = (payload: any) => {
  return {
    type: SET_TMESLOTS,
    payload,
  };
};

/** Get Appointment Slots */

export const getTimeSlots = () => async (dispatch: any) => {
  const { data }: any = await request({
    url: ApiMethods.GetTimeSlots,
    context: "getSlots",
  });

  dispatch(setTimeSlots(data || []));
};

/** Update time slot */
const updateTransferSlot = (payload: any) => {
  return {
    type: UPDATE_TRANSFER,
    payload,
  };
};

export const updateTimeSlot = ({
  chasis,
  timeSlot,
  apTime,
  computerId,
  sessionId,
}: any) => async (dispatch: any) => {
  const { data }: any = await request({
    url: ApiMethods.UpdateTimeSlot,
    method: "post",
    context: "updateSlot",
    data: {
      chasis,
      timeSlot,
      computerId,
      session_id: sessionId,
    },
  });
  const messageId: any = Guid.create();
  let message: any = {
    id: messageId.value,
    context: "app",
  };
  if ((data || "").includes("failed")) {
    message = {
      ...message,
      type: "error",
      devMessage: "Failed to process appointment slot change, please try again",
    };
  }

  const [res] = data;

  if (res && res.RESULT === "success") {
    message = {
      ...message,
      type: "success",
      devMessage: `New appiontment time slot [${apTime}] has been successfully reserved`,
    };
    dispatch(updateTransferSlot({ apTime: apTime }));
  }
  dispatch(setMessage(message));
};
