import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import theme from "Themes";
import { Provider } from "react-redux";
import store from "Redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
