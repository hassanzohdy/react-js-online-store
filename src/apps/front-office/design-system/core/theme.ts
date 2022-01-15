import { Theme } from "../types/theme";
import updateCssVars from "../utilities/update-css-vars";

const theme: Theme = {
  colors: {
    primary: "#F00",
    secondary: "#fd3500",
  },
};

updateCssVars("--colors-primary", theme.colors.primary);

export default theme;
