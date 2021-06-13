import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Collapse,
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
import { useSmallBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { Route } from "@appTypes/routes";
import { useStyles } from "./styles";

interface Props {
  onSignupClick?: () => void;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  navRoutes: Route[];
}

export const MobileNavBar = ({
  onLoginClick,
  onLogoutClick,
  onSignupClick,
  navRoutes,
}: Props): JSX.Element => {
  const classes = useStyles();

  const smallMatches = useSmallBrekpointMatchesUp();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MuiAppBar position="fixed" className={classes.root} data-testid="app-bar">
      <Toolbar>
        <Grid container direction="column">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            wrap="nowrap"
            item
          >
            <Grid
              item
              sm={6}
              xs={2}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Link to={routesPaths.home}>
                  <IconButton edge="start" className={classes.menuButton}>
                    <img
                      src={
                        smallMatches
                          ? R.images.logo.LogoFullSmall
                          : R.images.logo.ImageLogo
                      }
                      alt="Logo"
                      height={50}
                    />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
            <Grid item sm={6} xs={10}>
              {isLoggedIn ? (
                <AccountBar onLogoutClick={onLogoutClick} isMobileView />
              ) : (
                <LoginBar
                  onLoginClick={onLoginClick}
                  onSignupClick={onSignupClick}
                  isMobileView
                  onMenuIconClick={handleExpandClick}
                />
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box pt={2} pb={4}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={1}
                >
                  <NavList navRoutes={navRoutes} />
                </Grid>
              </Box>
            </Collapse>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
