import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Footer } from "@containers/MainPage/Footer";
import { AppBar } from "@containers/MainPage/AppBar";
import { SignupPopup } from "@components/auth/SignupPopup";
import { LoginPopup } from "@components/auth/LoginPopup";
import { routes } from "@resources/res.routes";
import { routesPaths } from "@resources/res.routesPaths";
import { theme } from "@resources/theme";
import { useStyles } from "./styles";

export const AppLayout: React.FC = () => {
  const [contentBackgroundColor, setContentBackgroundColor] = useState<
    React.CSSProperties["color"]
  >("white");
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case routesPaths.flights:
        setContentBackgroundColor(theme.palette.brandOrange);
        break;
      default:
        setContentBackgroundColor("white");
    }
  }, [location.pathname]);

  return (
    <>
      <Grid className={classes.root} container direction="column" wrap="nowrap">
        <Grid item className={classes.appBar}>
          <AppBar />
        </Grid>
        <Grid
          item
          style={{ backgroundColor: contentBackgroundColor }}
          className={classes.content}
        >
          <Switch>
            {routes.map(route => (
              <Route
                key={route.id}
                path={
                  route.nestedRoutes && route.nestedRoutes?.length > 0
                    ? `${route.path}/*`
                    : route.path
                }
                component={route.component as React.FC<unknown>}
                exact={true}
              />
            ))}
          </Switch>
        </Grid>
        <Grid item className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
      <SignupPopup />
      <LoginPopup />
    </>
  );
};
