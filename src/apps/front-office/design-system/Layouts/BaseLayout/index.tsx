import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BaseLayoutProps } from "../../types/layout";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import muiTheme from "design-system/core/mui-theme";
import LayoutContext from "../../core/contexts/LayoutContext";
import { ThemeName } from "../../types/theme";
import themesList from "../../core/mui-theme/themes-list";

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [currentTheme, setCurrentTheme] =
    React.useState<ThemeOptions>(muiTheme);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(themesList[theme]);
  };

  return (
    <LayoutContext.Provider
      value={{
        setTheme: setTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
