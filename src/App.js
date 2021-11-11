import Main from "./coponents/Main/Main";
import Header from "./coponents/Header/Header";
import styled from "styled-components";
import { Theme } from "./styles/Theme";

const StAppContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-image: url(${Theme.bgi.rain}); */
  background-color: #cbdcff;
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
