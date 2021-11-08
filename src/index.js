import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { createStore } from "redux";
import rootReducer from "./redux/modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
