import React from "react";
import {
  Grid,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { LoginBar } from "@components/LoginBar";
import { R } from "@resources/res";
import { useStyles } from "./styles";

export const DesktopNavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <MuiAppBar className={classes.root} position="static" data-testid="app-bar">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid
            item
            xs={10}
            spacing={4}
            container
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <img src={R.images.logo.LogoFullSmall} alt="Logo" height={50} />
              </IconButton>
            </Grid>
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
          <Grid item xs={2} container justify="flex-end" alignItems="center">
            <LoginBar />
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
