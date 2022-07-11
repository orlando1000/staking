import { CssBaseline, ThemeProvider } from "@mui/material";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import './i18next'; // add configuration to app
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme/theme";
import { getLibrary } from "./utils/functions";



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <CssBaseline />
        <App />
      </Web3ReactProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();