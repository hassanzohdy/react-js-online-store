import baseTheme from "../theme";
import { createTheme, ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    background: {
      default: baseTheme.paper.background,
    },
    text: {
      primary: baseTheme.paper.color,
    },
    primary: {
      main: baseTheme.colors.primary,
    },
    secondary: {
      main: baseTheme.colors.secondary!,
    },
  },
  typography: {
    htmlFontSize: Number(baseTheme.paper.fontFamily),
    fontFamily: baseTheme.paper.fontFamily,
  },
};

const muiTheme = createTheme(theme);

export default muiTheme;
