import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { WEATHER } from "../redux/modules/weather/weather";
import { Theme } from "../styles/Theme";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const Main = () => {
  const [city, setCity] = useState(null);
  const dispatch = useDispatch();

  console.log(city);

  const onClickWeather = () => {
    dispatch({ type: WEATHER, weather: city });
  };

  const onChangeCity = (event) => {
    const city = event.target.value;
    setCity(city);
  };

  return (
    <MainContainer>
      <input placeholder="City" onChange={onChangeCity} />
      <button
        onClick={() => {
          onClickWeather();
        }}
      >
        Get Weather
      </button>
    </MainContainer>
  );
};

export default Main;
