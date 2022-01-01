import { Link } from "@mongez/react-router";
import React from "react";
import Helmet from "../../../../../helmet";

export default function HomePage() {
  const [s, ss] = React.useState("Home");

  React.useEffect(() => {
    setTimeout(() => {
      ss("Home 2");
    }, 1000);
  }, []);

  return (
    <div>
      <Helmet
        description={s}
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
