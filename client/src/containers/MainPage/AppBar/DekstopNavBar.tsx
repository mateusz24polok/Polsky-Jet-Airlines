import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { R } from "../../../../res/res";

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
            <Grid item>
              <Button color="inherit">Login</Button>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Grid item>
              <Button color="inherit">SignUp</Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
