import { ThemeOptions } from "@mui/material";
import React from "react";
import { LayoutContextProps } from "../../types/layout";

const defaultProps: LayoutContextProps = {
  setTheme: (theme: ThemeOptions): void => {},
};

const LayoutContext = React.createContext<LayoutContextProps>(defaultProps);

export default LayoutContext;
