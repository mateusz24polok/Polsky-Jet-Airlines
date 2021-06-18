import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { NonContentPage } from "@pages/NonContentPage";
import { Footer } from "@containers/MainPage/Footer";
import { AppBar } from "@containers/MainPage/AppBar";
import { SignupPopup } from "@components/auth/SignupPopup";
import { LoginPopup } from "@components/auth/LoginPopup";
import { SnackBar } from "@components/shared/SnackBar";
import { fetchUserDetails, selectUserId } from "@store/slices/user";
import { routes } from "@resources/res.routes";
import { routesPaths } from "@resources/res.routesPaths";
import { theme } from "@resources/theme";
import { getProtectedRoutesByRole } from "@utils/routesUtils";
import { useStyles } from "./styles";

export const AppLayout: React.FC = () => {
  const dispatch = useDispatch();
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
      case routesPaths.logout:
        setContentBackgroundColor(theme.palette.brandOrange);
        break;
      case routesPaths.nonAuthorized:
        setContentBackgroundColor(theme.palette.brandOrange);
        break;
      default:
        setContentBackgroundColor("white");
    }
  }, [location.pathname]);

  // Here must be fetched userDetails (if there is an access to user id), because when user has ADMIN
  // He has to have access to managment system which appear on navbar on the base of ADMIN role

  const userId = useSelector(selectUserId);
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId));
    }
  }, [dispatch, userId]);

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
            {getProtectedRoutesByRole(routes).map(route => (
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
            <NonContentPage />
          </Switch>
        </Grid>
        <Grid item className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
      <SnackBar />
      <SignupPopup />
      <LoginPopup />
    </>
  );
};
