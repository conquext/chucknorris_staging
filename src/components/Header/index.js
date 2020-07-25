import React, { useEffect, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core/styles";

const headerStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  langPick: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    fontSize: "10px",
  },
}));

const Header = () => {
  const classes = headerStyle();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
    window.history.pushState(`#${lng}`, lng, `#${lng}`);
  };

  const changeTheLanguage = useCallback(changeLanguage, []);

  useEffect(() => {
    const location = window.location;
    let supportedLanguages = ["en", "ar", "he"];
    const hash = location.hash || location.pathname || "en";
    const languagePath = hash.slice(-2);
    if (supportedLanguages.includes(languagePath))
      changeTheLanguage(languagePath);

    return () => null;
  }, [changeTheLanguage]);

  return (
    <AppBar position="relative">
      <Toolbar className={classes.root}>
        <div>
          <Typography variant="h6" color="inherit" noWrap>
            {t("title")}
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.langPick}
          >
            {t("language")}
          </Typography>

          <div className={classes.langPickItem}>
            <button
              href="#en"
              aria-label="english"
              onClick={() => changeTheLanguage("en")}
            >
              en
            </button>
            <button
              href="#ar"
              aria-label="arabic"
              onClick={() => changeTheLanguage("ar")}
            >
              ar
            </button>
            <button
              href="#he"
              aria-label="hebrew"
              onClick={() => changeTheLanguage("he")}
            >
              he
            </button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
