import {
  SET_VEH,
  SET_TRANSFER,
  SET_MESSAGE,
  SET_TMESLOTS,
  SET_APP,
} from "config/constants";
import { resetMessage } from "actions";
import { mapAppToTransfree } from "config/utils";
const transformKeys = (payload: any) => {
  return Object.keys(payload).reduce((tranformedObj: any, key: any) => {
    const newKey = key
      .split("_")
      .map((token: any, i: number) => {
        token = token.toLowerCase();
        if (i === 0) {
          return token;
        }

        return token.charAt(0).toUpperCase() + token.slice(1);
      })
      .join("");
    tranformedObj[newKey] = payload[key];

    return tranformedObj;
  }, {});
};

const tranformKeysMiddleware = (store: any) => (next: any) => (action: any) => {
  if ([SET_TRANSFER, SET_VEH].includes(action.type)) {
    action = {
      ...action,
      payload: transformKeys(action.payload),
    };
  }

  if ([SET_APP].includes(action.type)) {
    const camcelCaseMap = transformKeys({ ...action.payload });
    action = {
      ...action,
      payload: mapAppToTransfree(camcelCaseMap),
    };
  }

  if ([SET_TMESLOTS].includes(action.type, action.payload)) {
    action = {
      ...action,
      payload:
        Array.isArray(action.payload) &&
        (action.payload.slice() || []).map(transformKeys).map((load: any) => {
          const [time, window] = load.time.replace(")", "").split("(");
          return {
            ...load,
            time: time.trim().toUpperCase(),
            window,
          };
        }),
    };
  }

  if ([SET_MESSAGE].includes(action.type)) {
    setTimeout(() => {
      store.dispatch(resetMessage(action.payload.messageId));
    }, 10000);
  }
  next(action);
};

export default [tranformKeysMiddleware];
