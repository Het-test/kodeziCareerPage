import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#556cd6",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    error: {
      main: red.A400,
    },
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
