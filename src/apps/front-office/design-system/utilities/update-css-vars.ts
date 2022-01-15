import { cssVariable } from "@mongez/dom";
import { Obj } from "@mongez/reinforcements";
import { Theme } from "../types/theme";

// --colors-primary
// --colors-secondary
// --font-family-primary
// --font-family-secondary
export default function updateCssVars(theme: Theme): void {
  const flattenTheme = Obj.flatten(theme, "-");

  for (let key in flattenTheme) {
    cssVariable(`--${key}`, flattenTheme[key]);
  }
}
