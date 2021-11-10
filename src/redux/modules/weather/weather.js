import { put, takeEvery } from "redux-saga/effects";

const WEATHER = "weather/WEATHER";
const WEATHER_SUCCESS = "weather/WEATHER_SUCCESS";
const WHATER_ERROR = "weather/WEATHER_ERROR";

export const weatherAync = () => ({ type: WEATHER_SUCCESS });

function* weatherDatas() {
  try {
    yield put({ type: WEATHER_SUCCESS, weather: "hello" });
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
  yield takeEvery(WEATHER_SUCCESS, weatherDatas);
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
