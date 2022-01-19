import muiTheme from ".";
import { ThemesList } from "../../types/theme";
import darkTheme from "./dark-theme";
import orangeTheme from "./orange-theme";

const themesList: ThemesList = {
  dark: darkTheme,
  default: muiTheme,
  orange: orangeTheme,
};

export default themesList;
