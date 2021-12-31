import React from "react";
import Helmet from "../../../../../helmet";

export default function HomePage() {
  const [s, ss] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      ss(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Helmet
        description="My Page Description"
        keywords={["my", "keywords", "list", "in", "array"]}
        image="My Home image"
        title="My Home Page"
        pageId="home-page"
        className="my-home page-class"
        appName="My App Name"
        url="https://google.com"
        htmlAttributes={{
          myAttr: "ok",
        }}
        appNameSeparator=" | "
      />
      <h1>Welcome Home Page</h1>
    </div>
  );
}
