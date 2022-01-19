import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BaseLayoutProps } from "../../types/layout";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import muiTheme from "design-system/core/mui-theme";

const theme = createTheme(muiTheme);

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
