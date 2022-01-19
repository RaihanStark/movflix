import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App.jsx";
import { WatchListProvider } from "./context";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WatchListProvider>
        <App />
      </WatchListProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
