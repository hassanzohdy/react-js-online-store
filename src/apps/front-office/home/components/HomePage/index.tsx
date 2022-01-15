import React from "react";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { theme, darkTheme, setupTheme } from "design-system";

export type ThemeMode = "light" | "dark" | null;

export default function HomePage() {
  const [currentThemeMode, setThemeMode] = React.useState<ThemeMode>(null);

  const toggleTheme = () => {
    let newTheme: ThemeMode = null;

    if (!currentThemeMode || currentThemeMode === "light") {
      newTheme = "dark";
    } else if (currentThemeMode === "dark") {
      newTheme = "light";
    }

    setupTheme(newTheme === "light" ? theme : darkTheme);

    setThemeMode(newTheme);
  };

  return (
    <div>
      <Helmet title="Home Page" />
      <h1>Welcome Home Page</h1>
      Current Theme Mode: <strong>{currentThemeMode || "None"}</strong>
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
