import React from "react";
import { ThemeProvider } from "styled-components";
import CareerPage from "../../views/CareerPage";

import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    background: {
      paper: "#020816",
    },
    text: {
      primary: "#ffffff",
      secondary: "#6F7687",
    },
  },
});

const careers = () => {
  return (
    <ThemeProvider theme={theme}>
      <CareerPage />
    </ThemeProvider>
  );
};

export default careers;
