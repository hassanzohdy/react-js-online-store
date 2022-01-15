import { cssVariable } from "@mongez/dom";

export default function updateCssVars(key: string, value: string): void {
  cssVariable(key, value);
}
