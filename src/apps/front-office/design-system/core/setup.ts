import { googleFont } from "@mongez/dom";

function declareFonts() {
  googleFont("https://fonts.googleapis.com/css2?family=Roboto", "primary-font");
}

export default function setupTheme() {
  declareFonts();
}
