import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./redux/modules";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

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
