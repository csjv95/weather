import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import weather, { weatherStart } from "./weather/weather";

const rootReducer = combineReducers({ weather });

export function* rootSaga() {
  yield all([weatherStart()]);
}

export default rootReducer;
