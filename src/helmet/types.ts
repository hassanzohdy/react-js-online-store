// TODO: add mergeClassNames prop to merge class name passed to helmet component with helmet configurations.
export type HelmetProps = {
  /**
   * HTML Page Title
   * This will set the og:title, twitter:title and itemprop name
   */
  title: string;
  /**
   * Define the app name, needed when appendAppName is set to true
   */
  appName?: string;
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
  keywords?: string | string[];
  /**
   * Page image
   */
  image?: string;
  /**
   * Defines page url
   * This can be changed from helmet configurations
   * If set to true, then the current url will be grabbed directly.
   *
   * @default true
   */
  url?: boolean | string;
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
   * Define the app name, needed when appendAppName is set to true
   */
  appName?: string;
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
   * Allow adding url meta tags automatically in the head tag
   *
   * @default true
   */
  url?: boolean;
  /**
   * Sets Html attributes list to html tag
   */
  htmlAttributes?: Object;
  /**
   * Define page class name
   */
  className?: string;
};
