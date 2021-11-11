import React from "react";
import styled from "styled-components";
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
      <section>
        <h2>Next 4days</h2>
        <article>
          <h3>Tomorrow</h3>
        </article>

        <article>
          <h3>Tomorrow</h3>
        </article>

        <article>
          <h3>Tomorrow</h3>
        </article>

        <article>
          <h3>Tomorrow</h3>
        </article>
      </section>
    </StMainContainer>
  );
};

export default Main;
