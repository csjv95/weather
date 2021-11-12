import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodayWeather from "../coponents/TodayWeather/TodayWeather";
import { today } from "../service/date/date";

const ContainerTodayWeather = () => {
  const [hover, setHover] = useState(false);
  const weather = useSelector((state) => state.weather);

  if (weather.loading) return <div>hello</div>;
  if (!weather.weather) return <div>loading....</div>;

  const todayWeather = weather.weather.list.filter((item) => {
    const time = item.dt_txt;
    const todayWeatherList = time.includes(today) && item;

    return todayWeatherList;
  });

  return (
    <TodayWeather
      todayWeather={todayWeather}
      hover={hover}
      setHover={setHover}
    />
  );
};

export default ContainerTodayWeather;
