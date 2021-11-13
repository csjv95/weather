import { call, put, takeLatest } from "@redux-saga/core/effects";
import getWeather from "../../../service/weathers/getWeather";

export const WEATHER = "weather/WEATHER";
export const WEATHER_SUCCESS = "weather/WEATHER_SUCCESS";
export const WHATER_ERROR = "weather/WEATHER_ERROR";

export const weatherSuccess = (city) => ({ type: WEATHER_SUCCESS, city });

function* weatherDatas(action) {
  const city = action.city;
  try {
    const weather = yield call(getWeather, city);
    yield put({ type: WEATHER_SUCCESS, weather });
  } catch (error) {
    yield put({ type: WHATER_ERROR, error: error });
  }
}

const initialState = {
  loading: false,
  error: null,
  weather: null,
};

export function* weatherStart() {
  yield takeLatest(WEATHER, weatherDatas);
}

export default function weather(state = initialState, action) {
  switch (action.type) {
    case WEATHER:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.weather,
      };
    case WHATER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
