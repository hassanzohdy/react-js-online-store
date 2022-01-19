import Helmet from "@mongez/react-helmet";
import { Button, Typography } from "@mui/material";
import useLayout from "design-system/core/hooks/useLayout";
import muiTheme from "design-system/core/mui-theme";
import orangeTheme from "design-system/core/mui-theme/orange-theme";

let currentTheme = "default";

export default function HomePage() {
  const { setTheme } = useLayout();

  const changeTheme = () => {
    if (currentTheme === "default") {
      setTheme(orangeTheme);
      currentTheme = "orange";
    } else {
      setTheme(muiTheme);
      currentTheme = "default";
    }
  };

  return (
    <div>
      <Helmet title="Home Page" />
      <Typography color="primary" variant="h1">
        Welcome Home Page
      </Typography>
      <Button onClick={changeTheme} variant="contained">
        Welcome
      </Button>
      <span>Another Text</span>
      <br />
    </div>
  );
}
