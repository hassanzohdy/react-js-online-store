import { googleFont } from "@mongez/dom";
import { Theme } from "../types/theme";
import updateCssVars from "../utilities/update-css-vars";

function setupFonts() {
  googleFont("https://fonts.googleapis.com/css2?family=Roboto", "primary-font");
}

export default function setupTheme(theme: Theme) {
  setupFonts();
  updateCssVars(theme);
}
