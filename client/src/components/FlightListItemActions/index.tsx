import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

export const FlightListItemActions: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Typography variant="h5">960zł</Typography>
        <Typography variant="h6">
          Śpiesz się zostało jeszcze tylko x miejsc
        </Typography>
        <Button>Zamów bilet</Button>
      </Grid>
    </Grid>
  );
};
