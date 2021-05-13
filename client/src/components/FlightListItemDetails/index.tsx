import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";

export const FlightListItemDetails: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <img
          src={R.images.utilIcons.AirplaneIconBlack}
          alt="Airplane Logo"
          height={40}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5">12:40 Warszawa</Typography>
        <Typography variant="h6">Lotnisko Chopina</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        justify="space-around"
        container
        direction="column"
        alignItems="center"
      >
        <img
          src={R.images.utilIcons.RightArrowIcon}
          alt="Right Arrow"
          height={40}
          width={160}
        />
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Czas lotu: 2h55m
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5">15:45 Paryż</Typography>
        <Typography variant="h6">Charles de Gaule Airport</Typography>
      </Grid>
    </Grid>
  );
};
