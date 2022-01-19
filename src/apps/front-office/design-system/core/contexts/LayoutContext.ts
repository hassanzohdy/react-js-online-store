import React from "react";
import { LayoutContextProps } from "../../types/layout";
import { ThemeName } from "../../types/theme";

const defaultProps: LayoutContextProps = {
  setTheme: (theme: ThemeName): void => {},
};

const LayoutContext = React.createContext<LayoutContextProps>(defaultProps);

export default LayoutContext;
