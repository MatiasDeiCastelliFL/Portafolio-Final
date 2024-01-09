import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { SnackbarProvider } from "notistack";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(0, 33, 65)",
    },
    secondary: {
      main: "#b500d6",
    },
    tersary: {
      main: "#eac102",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xd: 486,
      xm: 556,
      sm: 600,
      sl: 615,
      sg: 701,
      se: 741,
      sd: 885,
      me: 801,
      md: 900,
      mdf: 910,
      mf: 997,
      mfm: 1001,
      mfs: 1052,
      ld: 1122,
      lf: 1124,
      lg: 1200,
      lgs: 1258,
      xl: 1536,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
