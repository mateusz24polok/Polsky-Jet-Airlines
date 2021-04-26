import React, { useState } from "react";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { LoginBar } from "@components/LoginBar";
import { R } from "@resources/res";
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
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Loty
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Hotele
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Samochody
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      O nas
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Collapse>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
