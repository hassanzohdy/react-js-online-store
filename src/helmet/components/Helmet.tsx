import {
  setDescription,
  setImage,
  setKeywords,
  setTitle,
  setCanonicalUrl,
  setHTMLAttributes,
} from "@mongez/dom";
import React from "react";
import { HelmetProps } from "../types";

export default function Helmet(props: HelmetProps) {
  // let's define our page title
  // page title = title prop + app separator + app name

  const title = React.useMemo(() => {
    let titleSegments: string[] = [props.title];

    if (props.appendAppName) {
      if (props.appNameSeparator) {
        titleSegments.push(props.appNameSeparator);
      }

      titleSegments.push(props.appName!);
    }

    return titleSegments.join("");
  }, [props.title]);

  setTitle(title);

  if (props.pageId) {
    document.documentElement.id = props.pageId;
  }

  if (props.className) {
    for (const className of props.className.split(" ")) {
      document.documentElement.classList.add(className);
    }
  }

  if (props.htmlAttributes) {
    setHTMLAttributes(props.htmlAttributes);
  }

  if (props.description) {
    setDescription(props.description);
  }

  if (props.keywords) {
    setKeywords(props.keywords);
  }

  if (props.image) {
    setImage(props.image);
  }

  if (props.url) {
    let url: string = "";
    if (props.url === true) {
      url = window.location.href; // get current url of the page
    } else {
      url = props.url;
    }

    setCanonicalUrl(url);
  }

  return null;
}

Helmet.defaultProps = {
  appendAppName: true,
  url: true,
};
