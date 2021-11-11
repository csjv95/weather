import Main from "./coponents/Main";
import Header from "./coponents/Header";
import styled from "styled-components";
import { Theme } from "./styles/Theme";

const StAppContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${Theme.bgi.cloudy});
  background-repeat: no-repeat;
`;

const App = () => {
  return (
    <StAppContainer>
      <Header />
      <Main />
    </StAppContainer>
  );
};

export default App;
