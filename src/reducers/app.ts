import {
  SET_LOADING,
  RESET_LOADING,
  SET_MESSAGE,
  RESET_MESSAGE
} from "config/constants";
import { IAction, IAppState } from "config/types";

/** APP Initial State Values */
export const initialState = {
  loading: { app: { text: "Loading...", status: false } },
  messages: []
};

const defaultContext = `app`;

export default (state: IAppState = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [payload.context || defaultContext]: { ...payload }
        }
      };

    case RESET_LOADING:
      const { context: resetContext }: any = payload || {};

      return {
        ...state,
        loading: {
          ...state.loading,
          [resetContext || defaultContext]: {
            status: false,
            text: "Loading..."
          }
        }
      };

    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]
      };

    case RESET_MESSAGE:
      if (!payload) {
        return {
          ...state,
          messages: []
        };
      }

      return {
        ...state,
        messages: state.messages.filter(
          (message: any) => message.id !== payload
        )
      };

    default:
      return state;
  }
};
