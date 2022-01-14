import React from "react";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";

export default function HomePage() {
  return (
    <div>
      <Helmet
        keywords={["my", "keywords", "list", "in", "array"]}
        image="My Home image"
        title="Home Page"
        pageId="home-page"
        className="my-home page-class"
        url="https://google.com"
        htmlAttributes={{
          myAttr: "ok",
        }}
      />
      <h1>Welcome Home Page</h1>
      <Link to="/account/login">Login</Link>
    </div>
  );
}
