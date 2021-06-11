import React from "react";
import { useSelector } from "react-redux";
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
import { selectIsLoggedIn } from "@store/slices/auth";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { Route } from "@appTypes/routes";
import { useStyles } from "./styles";

interface Props {
  onSignupClick?: () => void;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  navRoutes: Route[];
}

export const DesktopNavBar = ({
  onLoginClick,
  onLogoutClick,
  onSignupClick,
  navRoutes,
}: Props): JSX.Element => {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
              <AccountBar onLogoutClick={onLogoutClick} />
            ) : (
              <LoginBar
                onSignupClick={onSignupClick}
                onLoginClick={onLoginClick}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
