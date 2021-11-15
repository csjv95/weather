import React, { useState } from "react";
import matchImg from "../../service/matchImg/mathImg";
import { StImg, StListItem } from "../TodayWeather/TodayWeather";

const LaterDays = ({ day }) => {
  const [hover, setHover] = useState(false);
  const changeCelsius = 273.15;
  const temp = (day.main.temp - changeCelsius).toFixed(2);
  const feelLike = (day.main.feels_like - changeCelsius).toFixed(1);
  const maxTemp = day.main.temp_max;
  const minTemp = day.main.temp_min;
  const humidity = day.main.humidity;
  const pressure = day.main.pressure;
  const description = day.weather[0].description;
  const icon = day.weather[0].icon;

  return hover ? (
    <StListItem key={day.dt} onMouseLeave={() => setHover(false)}>
      <div>{day.dt_txt}</div>
      <div>{description}</div>
      <div>{`기온 ${temp}°C`}</div>
      <div>{`체감 온도 ${feelLike}°C`}</div>
      <div>{`최고 ${maxTemp}°C`}</div>
      <div>{`최저 ${minTemp}°C`}</div>
      <div>{`습도 ${humidity}%`}</div>
      <div>{`기압 ${pressure}hPa`}</div>
    </StListItem>
  ) : (
    <StListItem key={day.dt} onMouseEnter={() => setHover(true)}>
      <div>{day.dt_txt}</div>
      <StImg src={matchImg(icon)} alt="weather img" />
      <div>{`${temp}°C`}</div>
    </StListItem>
  );
};

export default LaterDays;
