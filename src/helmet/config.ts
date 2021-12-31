import { HelmetConfigurations } from "./types";

let defaultConfigurations: HelmetConfigurations = {
  appendAppName: true,
  autoAddUrl: true,
  appNameSeparator: " | ",
};

let helmetConfigurations: HelmetConfigurations = { ...defaultConfigurations };
