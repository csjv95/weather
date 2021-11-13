import React from "react";
import { useSelector } from "react-redux";
import LaterWeather from "../coponents/LaterWeather/LaterWeather";
import {
  today,
  oneDaysLater,
  twoDaysLater,
  ThreeDaysLater,
  fourDaysLater,
} from "../service/date/date";

const ContainerLaterWeather = () => {
  const weather = useSelector((state) => state.weather);

  if (weather.loading) return <div>hello</div>;
  if (!weather.weather) return <div>loading....</div>;

  const laterWeather = weather.weather.list.filter((item) => {
    const time = item.dt_txt;
    const laterWeatherList = !time.includes(today) && item;

    return laterWeatherList;
  });

  const oneDaysLaterWeather = laterWeather.filter((item) => {
    const time = item.dt_txt;
    const tomorrowWeatherList = time.includes(oneDaysLater) && item;

    return tomorrowWeatherList;
  });

  const twoDaysLaterWeather = laterWeather.filter((item) => {
    const time = item.dt_txt;
    const tomorrowWeatherList = time.includes(twoDaysLater) && item;

    return tomorrowWeatherList;
  });
  const ThreeDaysLaterWeather = laterWeather.filter((item) => {
    const time = item.dt_txt;
    const tomorrowWeatherList = time.includes(ThreeDaysLater) && item;

    return tomorrowWeatherList;
  });
  const fourDaysLaterWeather = laterWeather.filter((item) => {
    const time = item.dt_txt;
    const tomorrowWeatherList = time.includes(fourDaysLater) && item;

    return tomorrowWeatherList;
  });

  return (
    <LaterWeather
      oneDaysLaterWeather={oneDaysLaterWeather}
      twoDaysLaterWeather={twoDaysLaterWeather}
      ThreeDaysLaterWeather={ThreeDaysLaterWeather}
      fourDaysLaterWeather={fourDaysLaterWeather}
    />
  );
};

export default ContainerLaterWeather;
