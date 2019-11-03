import {
  SET_LOADING,
  RESET_LOADING,
  SET_MESSAGE,
  RESET_MESSAGE
} from "config/constants";
import { ILoading } from "config/types";

/** APP ACTIONS */

// Set Loadinng with default values

export const setLoading = (
  payload: ILoading = { text: "Loading...", status: true },
  context: string = "app"
) => {
  return {
    type: SET_LOADING,
    payload: {
      context,
      ...payload
    }
  };
};

// Reset Loading Based on context

export const resetLoading = (context: string) => {
  return {
    type: RESET_LOADING,
    payload: { context }
  };
};

// Reset Loading Based on context

export const setMessage = (message: object) => {
  return {
    type: SET_MESSAGE,
    payload: message
  };
};

// Reset Loading Based on context

export const resetMessage = (id: any) => {
  return {
    type: RESET_MESSAGE,
    payload: id
  };
};
