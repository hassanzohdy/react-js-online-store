import {
  setDescription,
  setImage,
  setKeywords,
  setTitle,
  setCanonicalUrl,
  setHTMLAttributes,
  getMetaData,
} from "@mongez/dom";
import React from "react";
import { getHelmetConfig } from "../config";
import { HelmetConfigurations, HelmetProps } from "../types";

export default function Helmet(props: HelmetProps) {
  function getConfig<T>(key: keyof HelmetProps): T {
    return props[key] !== undefined
      ? props[key]
      : getHelmetConfig(key as keyof HelmetConfigurations);
  }

  const currentMeta = React.useMemo(() => getMetaData(), []);

  React.useEffect(() => {
    // let's define our page title
    // page title = title prop + app separator + app name
    const clear = () => setTitle(currentMeta.title);

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

    setTitle(titleSegments.join(""));

    return clear;
  }, [props.title, props.appName, props.appNameSeparator, props.appendAppName]);

  const currentPageId = React.useMemo(() => document.documentElement.id, []);

  React.useEffect(() => {
    const clear = () => {
      document.documentElement.id = currentPageId;
    };

    if (props.pageId === undefined) return clear;

    document.documentElement.id = props.pageId;

    return clear;
  }, [props.pageId]);

  const currentClasses = React.useMemo(
    () => document.documentElement.className,
    []
  );

  React.useEffect(() => {
    const clear = () => {
      document.documentElement.className = currentClasses;
    };

    const classes: string = getConfig<string>("className");

    if (classes === undefined) return clear;

    for (const className of classes.split(" ")) {
      document.documentElement.classList.add(className);
    }

    return clear;
  }, [props.className]);

  const currentHTMLAttributes = React.useMemo(() => {
    type Attributes = {
      [attributeKey: string]: string;
    };

    const attributesList: Attributes = {};

    for (const attribute of document.documentElement.attributes) {
      attributesList[attribute.name] = attribute.value;
    }

    return attributesList;
  }, []);

  // html attributes
  React.useEffect(() => {
    const clear = () => {
      setHTMLAttributes(currentHTMLAttributes);
    };

    const htmlAttributes: Object = getConfig<Object>("htmlAttributes");

    if (htmlAttributes === undefined) return clear;

    setHTMLAttributes(htmlAttributes);

    return clear;
  }, [props.htmlAttributes]);

  // description
  React.useEffect(() => {
    const clear = () => setDescription(currentMeta.description || "");

    if (props.description === undefined) return clear;

    if (props.description) {
      setDescription(props.description);
    }

    return clear;
  }, [props.description]);

  // keywords
  React.useEffect(() => {
    const clear = () => {
      setKeywords(currentMeta.keywords || "");
    };

    if (props.keywords === undefined) return clear;

    if (props.keywords) {
      setKeywords(props.keywords);
    }

    return clear;
  }, [props.keywords]);

  // page image
  React.useEffect(() => {
    const clear = () => {
      setImage(currentMeta.image || "");
    };

    if (props.image === undefined) return clear;

    if (props.image) {
      setImage(props.image);
    }

    return clear;
  }, [props.image]);

  // page url
  React.useEffect(() => {
    const clear = () => {
      setCanonicalUrl(currentMeta.url || "");
    };

    const pageUrl: boolean | string = getConfig<boolean | string>("url");

    if (pageUrl === undefined) return clear;

    let url: string = "";

    if (pageUrl === true) {
      url = window.location.href; // get current url of the page
    } else {
      url = pageUrl as string;
    }

    setCanonicalUrl(url);

    return clear;
  }, [props.url]);

  return null;
}
