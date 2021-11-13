import React from "react";
import styled from "styled-components";
import ContainerLaterWeather from "../../Container/ContainerLaterWeather";
import ContainerTodayWeather from "../../Container/ContainerTodayWeather";
import Search from "../Search/Search";

const StMainContainer = styled.main`
  flex-grow: 1;
`;

const Main = () => {
  return (
    <StMainContainer>
      <Search />
      <ContainerTodayWeather />
      <ContainerLaterWeather />
    </StMainContainer>
  );
};

export default Main;
