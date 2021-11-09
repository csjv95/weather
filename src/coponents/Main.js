import React, { useEffect } from "react";
import styled from "styled-components";
import getWeather from "../service/getWeather";
import { Theme } from "../styles/Theme";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const Main = () => {
  useEffect(() => {
    getWeather("Seoul");
  }, []);

  return (
    <MainContainer>
      <h1>hello my old friends</h1>
    </MainContainer>
  );
};

export default Main;
