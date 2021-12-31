export type HelmetProps = {
  /**
   * HTML Page Title
   * This will set the og:title, twitter:title and itemprop name
   */
  title: string;
  /**
   * Append app name beside the title
   *
   * @default true
   */
  appendAppName?: boolean;
  /**
   * Defines the separator between the page title and app name
   * This will be used only if the `appendAppName` is set to true
   *
   * @default " | "
   */
  appNameSeparator?: string;
  /**
   * Page meta Description
   */
  description?: string;
  /**
   * Page meta keywords
   * If passed as string, then separate each keyword with comma `,`.
   */
  keywords: string | string[];
  /**
   * Page image
   */
  image?: string;
  /**
   * Sets Html attributes list to html tag
   */
  htmlAttributes?: Object;
  /**
   * Defines Page id
   */
  pageId?: string;
  /**
   * Define page class name
   */
  className?: string;
};

export type HelmetConfigurations = {
  /**
   * Append app name beside the title
   *
   * @default true
   */
  appendAppName?: boolean;
  /**
   * Defines the separator between the page title and app name
   * This will be used only if the `appendAppName` is set to true
   *
   * @default " | "
   */
  appNameSeparator?: string;
  /**
   * Sets Html attributes list to html tag
   */
  htmlAttributes?: Object;
  /**
   * Define page class name
   */
  className?: string;
};
