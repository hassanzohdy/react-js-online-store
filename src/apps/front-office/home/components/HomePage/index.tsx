import Helmet from "@mongez/react-helmet";
import { Button, Typography } from "@mui/material";
import { ThemeName } from "design-system/types/theme";
import useLayout from "design-system/core/hooks/useLayout";
import themesList from "design-system/utilities/themes-list";

export default function HomePage() {
  const { setTheme } = useLayout();

  const changeTheme = (themeName: ThemeName) => {
    return () => {
      setTheme(themeName);
    };
  };

  return (
    <div>
      <Helmet title="Home Page" />
      <Typography color="primary" variant="h1">
        Welcome Home Page
      </Typography>
      {themesList.map((theme) => (
        <Button key={theme} onClick={changeTheme(theme)} variant="contained">
          {theme} Theme
        </Button>
      ))}
      <span>Another Text</span>
      <br />
    </div>
  );
}
