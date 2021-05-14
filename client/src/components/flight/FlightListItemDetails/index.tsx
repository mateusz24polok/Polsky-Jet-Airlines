import React from "react";
import { Grid } from "@material-ui/core";
import { R } from "@resources/res";
import { AirportDetails } from "./AirportDetails";
import { FlightTime } from "./FlightTime";

export const FlightListItemDetails: React.FC = () => {
  return (
    <Grid container justify="space-between">
      <Grid item>
        <AirportDetails
          airport="Lotnisko Chopina"
          city="Warszawa"
          time="12:40"
          photo={R.images.cities.BerlinPhoto}
        />
      </Grid>
      <Grid item>
        <FlightTime flightTime="2h55m" />
      </Grid>
      <Grid item>
        <AirportDetails
          airport="Charles de Gaule Airport"
          city="Paryż"
          time="15:45"
          photo={R.images.cities.ParisPhoto}
        />
      </Grid>
    </Grid>
  );
};
