import React from "react";
import { LayoutContextProps } from "../../types/layout";
import LayoutContext from "../contexts/LayoutContext";

export default function useLayout(): LayoutContextProps {
  return React.useContext(LayoutContext);
}
