import axios from "axios";

const getWeather = async (city) => {
  const seoul = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  return seoul.data;
};

export default getWeather;
