import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#3A98B9",
    },
    secondary: {
      main: "#1B6B93",
    },
    danger: {
      main: "#fc5050",
    },
    warning: {
      main: "#E7B10A",
    },
    light: {
      main: "#EEEEEE",
    },
    dark: {
      main: "#001C30",
    },
    success: {
      main: "#1de9b6",
    },
    fondo: {
      main: "#EEEEEE",
    },
  },
});

import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
