import { ThemeOptions } from "@mui/material";

export type Theme = {
  /**
   * Main Theme Colors
   */
  colors: {
    /**
     * Primary Color
     */
    primary: string;
    /**
     * Secondary Color
     */
    secondary?: string;
  };
  /**
   * Font settings
   */
  font: {
    /**
     * Font family list
     */
    family?: {
      /**
       * Primary font family
       */
      primary: string;
      /**
       * Secondary font family
       */
      secondary?: string;
    };
  };
  /**
   * Document paper base settings
   */
  paper: {
    /**
     * Main color for the entire paper
     */
    color: string;
    /**
     * Paper Background
     */
    background: string;
    /**
     * Main font family
     */
    fontFamily?: string;
    /**
     * Font family root size
     */
    fontSize?: string | number;
  };
};

export type ThemeName = "default" | "dark" | "orange";

/**
 * List of available themes
 */
export type ThemesList = {
  [theme in ThemeName]: ThemeOptions;
};
