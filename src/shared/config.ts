import Preloader from "./components/Preloader";
import { ApplicationConfigurations, setAppConfigurations } from "@mongez/react";

const appConfigurations: ApplicationConfigurations = {
  localization: {
    defaultLocaleCode: process.env.REACT_APP_DEFAULT_LOCALE_CODE,
    fallback: process.env.REACT_APP_FALLBACK_LOCALE_CODE,
  },
  helmet: {
    appName: "onlineStore",
    appendAppName: true,
    appNameSeparator: " | ",
    translatable: true,
    translateAppName: true,
  },
  router: {
    basePath: process.env.REACT_APP_BASE_PATH,
    notFound: {
      mode: "redirect",
      route: "/404",
    },
    preloader: Preloader,
  },
  endpoint: {
    baseUrl: process.env.REACT_APP_API_URL,
  },
};

setAppConfigurations(appConfigurations);
