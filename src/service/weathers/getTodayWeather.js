import axios from "axios";

const getTodayWeather = async (city) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${year}-${month}-${day}`;

  const seoul = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  const weatherList = seoul.data.list.filter((item) => {
    const time = item.dt_txt;
    const todayWeatherList = time.includes(today) && item;

    return todayWeatherList;
  });

  return weatherList;
};

export default getTodayWeather;
