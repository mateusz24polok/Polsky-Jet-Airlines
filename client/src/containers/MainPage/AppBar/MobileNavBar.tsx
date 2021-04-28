import React, { useState } from "react";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
} from "@material-ui/core";
import { LoginBar } from "@components/mainPage/appBar/LoginBar";
import { NavList } from "@components/mainPage/appBar/NavList";
import { R } from "@resources/res";
import { navRoutes } from "@resources/res.routes";
import { useSmallBrekpointMatches } from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

export const MobileNavBar = (): JSX.Element => {
  const classes = useStyles();

  const smallMatches = useSmallBrekpointMatches();

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
              </Grid>
            </Grid>
            <Grid item sm={6} xs={10}>
              <LoginBar isMobileView onMenuIconClick={handleExpandClick} />
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
