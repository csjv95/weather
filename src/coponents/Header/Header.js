import React from "react";
import styled from "styled-components";

const StTitle = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-size: 5rem;
  color: #e5f0ff;
`;

const Header = () => {
  return <StTitle>Hello Weather</StTitle>;
};
export default Header;
