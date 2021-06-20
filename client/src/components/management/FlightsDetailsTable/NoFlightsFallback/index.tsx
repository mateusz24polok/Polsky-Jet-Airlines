import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { useStyles } from "./styles";

export const NoFlightsFallback: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToNewFlightsPage = () => {
    history.push(routesPaths.managementNewFlight);
  };

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <img
        className={classes.logo}
        src={R.images.logo.LogoFullSmall}
        alt="Logo"
        width={300}
      />
      <Typography className={classes.text} variant="h5" align="center">
        Brak Lotów w bazie Polsky Jet
      </Typography>
      <Typography className={classes.text} variant="h6" align="center">
        Dodaj pierwszy lot
      </Typography>
      <Button onClick={goToNewFlightsPage} className={classes.button}>
        Dodaj lot
      </Button>
    </Grid>
  );
};
