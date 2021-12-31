import URLS from "app/utils/urls";
import router from "@mongez/react-router";
import LoginPage from "./components/auth/LoginPage";

router.add(URLS.account.auth.login, LoginPage);
