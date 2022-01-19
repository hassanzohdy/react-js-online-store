import { createTheme, ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    background: {
      default: "#FFF",
    },
    text: {
      primary: "#000",
    },
    primary: {
      main: "#ff4500",
    },
  },
  typography: {
    fontFamily: "",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
  },
};

const orangeTheme = createTheme(theme);

export default orangeTheme;
