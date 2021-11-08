// 미들웨어로 로딩 처리하기
const WEATHER = "weather/WEATHER";

export const weather = () => {
  dispatch({ type: get, weather});
}

const initialState = {
  weather : null
}

const getWeather = (state=initialState, action) => {
  switch(action.type){
    case get : 
      return {
        ...state,
        weather : action.weather
      }
  }
}