import { HelmetConfigurations } from "./types";

let defaultConfigurations: HelmetConfigurations = {
  appendAppName: true,
  appNameSeparator: " | ",
};

let helmetConfigurations: HelmetConfigurations = { ...defaultConfigurations };
