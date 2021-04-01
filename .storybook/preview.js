import React from "react";
import { ThemeProvider } from "react-jss";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "Themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Router>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Router>
  ),
];
