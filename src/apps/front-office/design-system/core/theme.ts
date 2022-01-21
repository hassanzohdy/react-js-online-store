import { googleFont } from "@mongez/dom";
import { Theme } from "../types/theme";

googleFont("https://fonts.googleapis.com/css2?family=Roboto");

const theme: Theme = {
  colors: {
    primary: "#F00",
    secondary: "#fd3500",
  },
  font: {
    family: {
      primary: "Roboto",
    },
  },
  paper: {
    color: "#000",
    background: "#FFF",
    fontFamily: "Roboto",
    fontSize: 16,
  },
};

export default theme;
