import URLS from "app/utils/urls";
import HomePage from "./components/HomePage";
import BaseLayout from "design-system/Layouts/BaseLayout";
import router, { LayoutComponent } from "@mongez/react-router";

router.group({
  layout: BaseLayout as LayoutComponent,
  routes: [
    {
      path: URLS.home,
      component: HomePage,
    },
  ],
});
