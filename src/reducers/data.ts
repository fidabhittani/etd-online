import {
  SET_VEH,
  SET_TRANSFER,
  SET_TMESLOTS,
  UPDATE_TRANSFER,
  SET_APP,
} from "config/constants";
import { IAction } from "config/types";

/** APP Initial State Values */
export const initialState = {
  vehicle: {},
  transfer: {},
  timeslots: [],
  app: {},
};

export default (state: any = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_APP:
      return {
        ...state,
        app: payload,
      };

    case SET_VEH:
      return {
        ...state,
        vehicle: payload,
      };
    case SET_TRANSFER:
      return {
        ...state,
        transfer: payload,
      };
    case SET_TMESLOTS:
      return {
        ...state,
        timeslots: payload || [],
      };
    case UPDATE_TRANSFER:
      return {
        ...state,
        transfer: {
          ...state.transfer,
          ...payload,
        },
      };
    default:
      return state;
  }
};
