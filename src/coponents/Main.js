import React from "react";
import styled from "styled-components";
import { Theme } from "../styles/Theme";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>hello my old friends</h1>
    </MainContainer>
  );
};

export default Main;
