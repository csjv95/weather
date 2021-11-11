import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { WEATHER } from "../redux/modules/weather/weather";

const StMainContainer = styled.main`
  flex-grow: 1;
`;

const Main = () => {
  const [city, setCity] = useState(null);
  const dispatch = useDispatch();

  console.log(city);

  const onClickWeather = () => {
    dispatch({ type: WEATHER, city });
  };

  const onChangeCity = (event) => {
    const city = event.target.value;
    setCity(city);
  };

  return (
    <StMainContainer>
      <input placeholder="City" onChange={onChangeCity} />
      <button
        onClick={() => {
          onClickWeather();
        }}
      >
        Get Weather
      </button>
    </StMainContainer>
  );
};

export default Main;
