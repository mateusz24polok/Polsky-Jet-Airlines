import React from "react";
import { Grid } from "@material-ui/core";
import { R } from "@resources/res";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { AirportDetails } from "./AirportDetails";
import { FlightTime } from "./FlightTime";

export const FlightListItemDetails: React.FC = () => {
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const renderMobileView = (): JSX.Element => (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AirportDetails
          airport="Lotnisko Chopina"
          city="Warszawa"
          time="12:40"
          date="24.05.2021"
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
          date="24.05.2021"
          photo={R.images.cities.ParisPhoto}
        />
      </Grid>
    </Grid>
  );

  const renderDesktopView = (): JSX.Element => (
    <Grid container justify="space-between">
      <Grid item>
        <AirportDetails
          airport="Lotnisko Chopina"
          city="Warszawa"
          time="12:40"
          date="24.05.2021"
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
          date="24.05.2021"
          photo={R.images.cities.ParisPhoto}
        />
      </Grid>
    </Grid>
  );
  return (
    <>
      {mediumMediaBreakpointMatches ? renderDesktopView() : renderMobileView()}
    </>
  );
};
