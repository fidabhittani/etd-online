import axios from "axios";
import { setLoading, resetLoading, setMessage } from "actions";
import { API_HOST } from "config/api";
import { dispatch } from "store";
import { Guid } from "guid-typescript";

/** SERVICE : This service will be use to handle api calls and trigger loaders
 * This will be an abstraction to actually dispatch messages onto the store if we encounter any errors
 * in API calls
 */

const axiosDefaults = {
  method: "get"
};

export default async (options: any) => {
  const { context = "app", errorContext = "app", ...clientOptions } = options;

  const axiosOptions = {
    ...axiosDefaults,
    ...clientOptions,
    url: `${API_HOST}/${clientOptions.url}`
  };

  try {
    dispatch(setLoading({ status: true, text: "Loading" }, context));
    const response = await axios(axiosOptions);
    return response;
  } catch (error) {
    const { status = 0, statusText = "Network Problem" }: any =
      error.response || {};

    const devMessage = error.message;

    const userMessage =
      "Something bad happened with the request, Please try again";

    const messageId: any = Guid.create();

    const message = {
      id: messageId.value,
      status,
      statusText,
      type: "error",
      devMessage,
      userMessage,
      context: errorContext
    };
    dispatch(setMessage(message));
  } finally {
    dispatch(resetLoading(context));
  }
  return {};
};
