import theme from "./theme";
import { Theme } from "../types/theme";

const darkTheme: Theme = { ...theme };

darkTheme.paper = {
  background: "#000",
  color: "#FFF",
  fontFamily: theme.paper?.fontFamily,
  fontSize: theme.paper?.fontSize,
};

export default darkTheme;
