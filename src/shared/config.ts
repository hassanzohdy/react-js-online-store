import Preloader from "./components/Preloader";
import { ApplicationConfigurations, setAppConfigurations } from "@mongez/react";

const appConfigurations: ApplicationConfigurations = {
  defaultLocaleCode: process.env.REACT_APP_DEFAULT_LOCALE_CODE,
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
