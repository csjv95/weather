import React, { useState } from "react";
import { StImg, StListItem } from "./TodayWeather";
import matchImg from "../../service/matchImg/mathImg";

const TodayWeatherItem = ({
  weather,
  temp,
  feelLike,
  maxTemp,
  minTemp,
  humidity,
  pressure,
  icon,
  description,
}) => {
  const [hover, setHover] = useState(false);

  return hover ? (
    <StListItem key={weather.dt} onMouseLeave={() => setHover(false)}>
      <div>{weather.dt_txt}</div>
      <div>{description}</div>
      <div>{`기온 ${temp}°C`}</div>
      <div>{`체감 온도 ${feelLike}°C`}</div>
      <div>{`최고 ${maxTemp}°C`}</div>
      <div>{`최저 ${minTemp}°C`}</div>
      <div>{`습도 ${humidity}%`}</div>
      <div>{`기압 ${pressure}hPa`}</div>
    </StListItem>
  ) : (
    <StListItem key={weather.dt} onMouseEnter={() => setHover(true)}>
      <div>{weather.dt_txt}</div>
      <StImg src={matchImg(icon)} alt="weather img" />
      <div>{`${temp}°C`}</div>
    </StListItem>
  );
};

export default TodayWeatherItem;
