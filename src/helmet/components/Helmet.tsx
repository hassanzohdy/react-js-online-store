import {
  setDescription,
  setImage,
  setKeywords,
  setTitle,
  setCanonicalUrl,
  setHTMLAttributes,
} from "@mongez/dom";
import React from "react";
import { HelmetConfigurations } from "..";
import { getHelmetConfig } from "../config";
import { HelmetProps } from "../types";

export default function Helmet(props: HelmetProps) {
  // let's define our page title
  // page title = title prop + app separator + app name

  function getConfig<T>(key: keyof HelmetProps): T {
    return props[key] !== undefined
      ? props[key]
      : getHelmetConfig(key as keyof HelmetConfigurations);
  }

  const title = React.useMemo(() => {
    let titleSegments: string[] = [props.title];

    const appendAppName = getConfig<boolean>("appendAppName");
    const appNameSeparator: string = getConfig<string>("appNameSeparator");
    const appName: string = getConfig<string>("appName");

    if (appendAppName && appName) {
      if (appNameSeparator) {
        titleSegments.push(appNameSeparator);
      }

      titleSegments.push(appName);
    }

    return titleSegments.join("");
  }, [props.title]);

  setTitle(title);

  if (props.pageId) {
    document.documentElement.id = props.pageId;
  }

  const classes: string = getConfig<string>("className");

  if (classes) {
    for (const className of classes.split(" ")) {
      document.documentElement.classList.add(className);
    }
  }

  const htmlAttributes: Object = getConfig<Object>("htmlAttributes");

  if (htmlAttributes) {
    setHTMLAttributes(htmlAttributes);
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

  const pageUrl: boolean = getConfig<boolean>("url");

  if (pageUrl) {
    let url: string = "";
    if (pageUrl === true) {
      url = window.location.href; // get current url of the page
    } else {
      url = pageUrl;
    }

    setCanonicalUrl(url);
  }

  return null;
}
