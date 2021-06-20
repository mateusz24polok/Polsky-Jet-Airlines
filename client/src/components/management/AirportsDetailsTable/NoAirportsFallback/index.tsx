import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { useStyles } from "./styles";

export const NoAirportsFallback: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToNewAirportPage = () => {
    history.push(routesPaths.managementNewAirport);
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
        Brak Lotnisk w bazie Polsky Jet
      </Typography>
      <Typography className={classes.text} variant="h6" align="center">
        Dodaj pierwsze lotnisko
      </Typography>
      <Button onClick={goToNewAirportPage} className={classes.button}>
        Dodaj lotnisko
      </Button>
    </Grid>
  );
};
