import React from "react";
import { Grid } from "@material-ui/core";
import { R } from "@resources/res";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import {
  getNextDateAfterTimeElapsed,
  getTimeHoursMinutesFormatDateFromMinutes,
} from "@utils/dateUtils";
import { Flight } from "@appTypes/flight";
import { AirportDetails } from "./AirportDetails";
import { FlightTime } from "./FlightTime";

interface Props {
  flight: Flight;
}

export const FlightListItemDetails: React.FC<Props> = ({ flight }) => {
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();
  const {
    estimatedFlightTime,
    startingAirport,
    destinationAirport,
    startingDate,
  } = flight;

  const formatedFlightStartingDate = new Date(
    startingDate,
  ).toLocaleDateString();
  const flightStartingDateHour = new Date(startingDate).getHours();
  const flightStartingDateMinutes = new Date(startingDate).getMinutes();
  const formatedFlightTime = getTimeHoursMinutesFormatDateFromMinutes(
    estimatedFlightTime,
  );
  const flightArrivalDate = getNextDateAfterTimeElapsed(
    startingDate,
    estimatedFlightTime,
  );
  const formatedFlightArrivalDate = new Date(
    flightArrivalDate,
  ).toLocaleDateString();
  const flightArrivalDateHour = new Date(flightArrivalDate).getHours();
  const flightArrivalDateMinutes = new Date(flightArrivalDate).getMinutes();

  const renderMobileView = (): JSX.Element => (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AirportDetails
          airport={startingAirport.airport}
          city={startingAirport.city}
          time={`${flightStartingDateHour}:${flightStartingDateMinutes}`}
          date={formatedFlightStartingDate}
          photo={startingAirport.airportPhoto || R.images.cities.MilanPhoto}
        />
      </Grid>
      <Grid item>
        <FlightTime flightTime={formatedFlightTime} />
      </Grid>
      <Grid item>
        <AirportDetails
          airport={destinationAirport.airport}
          city={destinationAirport.city}
          time={`${flightArrivalDateHour}:${flightArrivalDateMinutes}`}
          date={formatedFlightArrivalDate}
          photo={destinationAirport.airportPhoto || R.images.cities.MilanPhoto}
        />
      </Grid>
    </Grid>
  );

  const renderDesktopView = (): JSX.Element => (
    <Grid container justify="space-between">
      <Grid item>
        <AirportDetails
          airport={startingAirport.airport}
          city={startingAirport.city}
          time={`${flightStartingDateHour}:${flightStartingDateMinutes}`}
          date={formatedFlightStartingDate}
          photo={startingAirport.airportPhoto || R.images.cities.MilanPhoto}
        />
      </Grid>
      <Grid item>
        <FlightTime flightTime={formatedFlightTime} />
      </Grid>
      <Grid item>
        <AirportDetails
          airport={destinationAirport.airport}
          city={destinationAirport.city}
          time={`${flightArrivalDateHour}:${flightArrivalDateMinutes}`}
          date={formatedFlightArrivalDate}
          photo={destinationAirport.airportPhoto || R.images.cities.MilanPhoto}
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
