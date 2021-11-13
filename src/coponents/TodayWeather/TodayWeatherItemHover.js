import React from "react";
import { StImg, StListItem } from "./TodayWeather";
import matchImg from "../../service/matchImg/mathImg";

const TodayWeatherItemHover = ({
  setHover,
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
      <div>{description}</div>
      <div>{`기온 ${temp}°C`}</div>
      <div>{`체감 온도 ${feelLike}°C`}</div>
    </StListItem>
  );
};

export default TodayWeatherItemHover;
