import Helmet from "@mongez/react-helmet";
import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <Helmet title="Home Page" />
      <Typography color="primary" variant="h1">
        Welcome Home Page
      </Typography>
      <br />
    </div>
  );
}
