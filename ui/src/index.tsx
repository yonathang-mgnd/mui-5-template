import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";

import Themes from "./themes";
import App from "./App";
import { UserProvider } from "./context/UserContext";


// declare module '@mui/material/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }


ReactDOM.render(
  <UserProvider>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </UserProvider>,
  document.getElementById("root"),
);
