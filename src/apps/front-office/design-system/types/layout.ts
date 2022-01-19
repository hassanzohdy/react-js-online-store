import { ThemeOptions } from "@mui/material";
import React from "react";
import { ThemeName } from "./theme";

/**
 * Base layout props
 * For the time being, it accepts only children prop
 */
export type BaseLayoutProps = {
  children: React.ReactChildren;
};

export type LayoutContextProps = {
  setTheme: (theme: ThemeName) => void;
};
