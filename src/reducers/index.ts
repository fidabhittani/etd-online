import { combineReducers } from "redux";
import app from "reducers/app";
import data from "reducers/data";

/**
 *  Create a combine reducers
 */

export default combineReducers({ app, data });
