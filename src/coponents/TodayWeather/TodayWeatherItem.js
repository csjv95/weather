import React from "react";
import { StImg, StListItem } from "./TodayWeather";
import matchImg from "../../service/matchImg/mathImg";

const TodayWeatherItem = ({
  weather,
  temp,
  feelLike,
  description,
  weatherNum,
}) => {
  return (
    <StListItem key={weather.dt}>
      <div>{weather.dt_txt}</div>
      <StImg src={matchImg(weatherNum)} alt="weather img" />
      <div>{`${temp}°C`}</div>
    </StListItem>
  );
};

export default TodayWeatherItem;
