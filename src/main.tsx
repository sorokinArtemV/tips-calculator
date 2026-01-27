import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./app/theme";

console.log('main loaded');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
);
