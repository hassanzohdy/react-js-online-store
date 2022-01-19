import { createTheme, ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
  },
};

const darkTheme = createTheme(theme);

export default darkTheme;
