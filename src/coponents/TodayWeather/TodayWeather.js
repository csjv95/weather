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
  return (
    <StList>
      <StListItem>
        <StImg />
      </StListItem>
    </StList>
  );
};

export default TodayWeather;
