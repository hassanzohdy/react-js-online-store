import React from "react";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import theme from "design-system/core/theme";

export default function HomePage() {
  return (
    <div style={{ color: theme.colors.primary }}>
      <Helmet title="Home Page" />
      <h1>Welcome Home Page</h1>
      <Link to="/account/login">Login</Link>
    </div>
  );
}
