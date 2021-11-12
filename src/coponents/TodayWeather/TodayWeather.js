import React from "react";
import styled from "styled-components";
import TodayWeatherItem from "./TodayWeatherItem";
import TodayWeatherItemHover from "./TodayWeatherItemHover";

const StList = styled.ul`
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

  &:hover {
    opacity: 20%;
    set
  }
`;

export const StImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

const TodayWeather = ({ todayWeather, hover, setHover }) => {
  // todayWeather 날씨 보고 이미지랑 맞게 뿌리기 온도랑 시간대별로
  console.log(hover);

  return (
    <StList
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {todayWeather.map((weather) => {
        const changeCelsius = 273.15;
        const temp = (weather.main.temp - changeCelsius).toFixed(2);
        const feelLike = (weather.main.feels_like - changeCelsius).toFixed(1);
        const description = weather.weather[0].description;
        const weatherNum = weather.weather[0].id;

        return hover ? (
          <TodayWeatherItemHover
            key={weather.dt}
            weather={weather}
            temp={temp}
            feelLike={feelLike}
            description={description}
            weatherNum={weatherNum}
          />
        ) : (
          <TodayWeatherItem
            key={weather.dt}
            weather={weather}
            temp={temp}
            feelLike={feelLike}
            description={description}
            weatherNum={weatherNum}
          />
        );
      })}
    </StList>
  );
};

export default TodayWeather;
