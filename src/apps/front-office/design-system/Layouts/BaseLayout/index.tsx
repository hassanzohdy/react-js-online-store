import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BaseLayoutProps } from "../../types/layout";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import muiTheme from "design-system/core/mui-theme";
import LayoutContext from "../../core/contexts/LayoutContext";

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [currentTheme, setCurrentTheme] =
    React.useState<ThemeOptions>(muiTheme);

  return (
    <LayoutContext.Provider
      value={{
        setTheme: setCurrentTheme,
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
