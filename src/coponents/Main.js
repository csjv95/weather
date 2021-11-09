import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { weatherData } from "../redux/modules/weather/weather";
import { Theme } from "../styles/Theme";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const Main = () => {
  const dispatch = useDispatch();
  const getWeather = () => dispatch(weatherData());

  return (
    <MainContainer>
      <h1>Weather api testing...</h1>
      <input placeholder="City" />
      <button
        onClick={() => {
          getWeather();
        }}
      >
        Click
      </button>
    </MainContainer>
  );
};

export default Main;
