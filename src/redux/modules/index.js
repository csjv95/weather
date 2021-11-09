import { combineReducers } from "redux";
import weatherDatas, { weatherDataSaga } from "./weather/weather";
import { all } from "@redux-saga/core/effects";

const rootReducer = combineReducers({ weatherDatas });

export function* rootSaga() {
  yield all([weatherDataSaga()]);
}
export default rootReducer;
