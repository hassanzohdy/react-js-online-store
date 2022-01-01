import { Obj } from "@mongez/reinforcements";
import { HelmetConfigurations } from "./types";

let defaultConfigurations: HelmetConfigurations = {
  appendAppName: true,
  url: true,
  appNameSeparator: " | ",
};

// current configurations
let helmetConfigurations: HelmetConfigurations = { ...defaultConfigurations };

export function setHelmetConfigurations(
  newConfigurations: HelmetConfigurations
): void {
  helmetConfigurations = Obj.merge(helmetConfigurations, newConfigurations);
}

export function getHelmetConfig(
  key?: keyof HelmetConfigurations,
  defaultValue: any = null
): any {
  if (arguments.length === 0) return helmetConfigurations;

  return Obj.get(helmetConfigurations, key!, defaultValue);
}
