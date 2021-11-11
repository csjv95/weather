import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { WEATHER } from "../../redux/modules/weather/weather";

const SearchContainer = styled.section`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StInput = styled.input`
  width: 40rem;
  padding: 1em;
  border: 1px solid grey;
  border-radius: 1em;
  background-color: #e5f0ff;
  color: #191970;
`;

const Search = () => {
  const [city, setCity] = useState(null);
  const dispatch = useDispatch();

  const onChangeCity = (event) => {
    const city = event.target.value;
    setCity(city);
  };

  const onClickWeather = () => {
    dispatch({ type: WEATHER, city });
  };

  const onKeyEvent = (event) => {
    const key = event.key;
    if (key === "Enter") {
      onClickWeather();
    }
    return;
  };

  return (
    <SearchContainer>
      <StInput
        type="search"
        placeholder="City"
        onChange={onChangeCity}
        onKeyPress={onKeyEvent}
      />
    </SearchContainer>
  );
};

export default Search;
