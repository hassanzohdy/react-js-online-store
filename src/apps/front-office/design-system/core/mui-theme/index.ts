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
      main: "#ff00bc",
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

const muiTheme = createTheme(theme);

export default muiTheme;
