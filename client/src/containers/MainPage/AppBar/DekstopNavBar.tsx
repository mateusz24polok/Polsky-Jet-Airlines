import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
} from "@material-ui/core";
import { LoginBar } from "@components/mainPage/appBar/LoginBar";
import { AccountBar } from "@components/mainPage/appBar/AccountBar";
import { NavList } from "@components/mainPage/appBar/NavList";
import {
  selectIsLoggedIn,
  showLoginPopup,
  showSignupPopup,
} from "@store/slices/auth";
import { R } from "@resources/res";
import { navRoutes } from "@resources/res.routes";
import { routesPaths } from "@resources/res.routesPaths";
import { useStyles } from "./styles";

export const DesktopNavBar = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSignupPopupOpen = () => {
    dispatch(showSignupPopup());
  };

  const handleLoginPopupOpen = () => {
    dispatch(showLoginPopup());
  };

  return (
    <MuiAppBar className={classes.root} position="static" data-testid="app-bar">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item xs={10} container justify="flex-start" alignItems="center">
            <Grid item>
              <Link to={routesPaths.home}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                >
                  <img
                    src={R.images.logo.LogoFullSmall}
                    alt="Logo"
                    height={50}
                  />
                </IconButton>
              </Link>
            </Grid>
            <NavList navRoutes={navRoutes} />
          </Grid>
          <Grid item xs={2} container justify="flex-end" alignItems="center">
            {isLoggedIn ? (
              <AccountBar />
            ) : (
              <LoginBar
                onSignupClick={handleSignupPopupOpen}
                onLoginClick={handleLoginPopupOpen}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
