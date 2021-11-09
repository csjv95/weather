import { put, call, takeLatest } from "redux-saga/effects";
import getWeather from "../../../service/getWeather";

const WEATHER = "weather/WEATHER";
const WEATHER_SUCCESS = "weather/WEATHER_SUCCESS";
const WEATHER__ERROR = "weather/WEATHER__ERROR";

export const weatherData = () => ({ type: WEATHER_SUCCESS });

export function* getWeatherData() {
  try {
    const data = yield call(getWeather, "London");
    yield put({ type: WEATHER_SUCCESS, weather: data });
  } catch (error) {
    yield put({ type: WEATHER__ERROR, error });
  }
}

export function* weatherDataSaga() {
  yield takeLatest(WEATHER_SUCCESS, getWeatherData);
}

const initialState = {
  loading: false,
  error: null,
  weather: null,
};

export default function weatherDatas(state = initialState, action) {
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
    case WEATHER__ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
