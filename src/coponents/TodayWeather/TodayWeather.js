import React from "react";
import styled from "styled-components";
import TodayWeatherItem from "./TodayWeatherItem";

export const StList = styled.ul`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const StListItem = styled.li`
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #d7e8ff;
  border-radius: 2em;
  background-color: #d7e8ff;
  transition: hover 300ms ease-out;
  font-weight: 600;
`;

export const StImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

const TodayWeather = ({ todayWeather }) => {
  return (
    <StList>
      {todayWeather.map((weather) => {
        const changeCelsius = 273.15;
        const temp = (weather.main.temp - changeCelsius).toFixed(2);
        const feelLike = (weather.main.feels_like - changeCelsius).toFixed(1);
        const maxTemp = weather.main.temp_max;
        const minTemp = weather.main.temp_min;
        const humidity = weather.main.humidity;
        const pressure = weather.main.pressure;
        const description = weather.weather[0].description;
        const icon = weather.weather[0].icon;

        return (
          <TodayWeatherItem
            key={weather.dt}
            weather={weather}
            temp={temp}
            feelLike={feelLike}
            maxTemp={maxTemp}
            minTemp={minTemp}
            humidity={humidity}
            pressure={pressure}
            icon={icon}
            description={description}
          />
        );
      })}
    </StList>
  );
};

export default TodayWeather;
