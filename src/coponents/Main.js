import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Theme } from "../styles/Theme";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const Main = () => {
  const WEATHER_SUCCESS = "weather/WEATHER_SUCCESS";
  const dispatch = useDispatch();

  const hello = () => {
    dispatch({ type: WEATHER_SUCCESS });
  };

  return (
    <MainContainer>
      <button
        onClick={() => {
          hello();
        }}
      >
        increase
      </button>
      <button>decresase</button>
    </MainContainer>
  );
};

export default Main;
