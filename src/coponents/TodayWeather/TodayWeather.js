import React from "react";
import styled from "styled-components";

const StList = styled.ul`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const StListItem = styled.li`
  margin: 0 0.5rem;
  border: 1px solid #d7e8ff;
  border-radius: 2em;
  background-color: #d7e8ff;
`;

const StImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

const TodayWeather = ({ todayWeather }) => {
  // todayWeather 날씨 보고 이미지랑 맞게 뿌리기 온도랑 시간대별로
  const changeCelsius = 273.15;
  const time = todayWeather;

  console.log(time);
  return (
    <StList>
      {todayWeather.map((weather) => {
        const temp = (weather.main.temp - changeCelsius).toFixed(2);
        const feelLike = (weather.main.feels_like - changeCelsius).toFixed(1);
        const description = weather.weather[0].description;

        return (
          <StListItem key={weather.dt}>
            <div>{weather.dt_txt}</div>
            <StImg
              src="https://openweathermap.org/img/wn/13d@2x.png"
              alt="weather img"
            />
            <div>{description}</div>
            <div>{`기온 ${temp}°C`}</div>
            <div>{`체감 온도 ${feelLike}°C`}</div>
          </StListItem>
        );
      })}
    </StList>
  );
};

export default TodayWeather;
