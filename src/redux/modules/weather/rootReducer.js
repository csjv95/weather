import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import weatherApi, { weatherStart } from "./weather";

const rootReducer = combineReducers({ weatherApi });

export function* rootSaga() {
  yield all([weatherStart()]);
}

export default rootReducer;
