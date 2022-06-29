import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
