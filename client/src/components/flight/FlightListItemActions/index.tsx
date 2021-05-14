import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const FlightListItemActions: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        <Typography className={classes.price} variant="h5">
          960zł
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" align="center">
          Śpiesz się zostało jeszcze tylko x miejsc
        </Typography>
      </Grid>
      <Grid item>
        <Button color="default" variant="contained" className={classes.button}>
          Zamów bilet
        </Button>
      </Grid>
    </Grid>
  );
};
