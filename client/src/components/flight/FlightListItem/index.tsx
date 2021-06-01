import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { FlightListItemActions } from "@components/flight/FlightListItemActions";
import { FlightListItemDetails } from "@components/flight/FlightListItemDetails";
import {
  getFlightCheapestTicketPrice,
  getFlightFreeTickets,
} from "@utils/flightUtils";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { Flight } from "@appTypes/flight";
import { useStyles } from "./styles";

interface Props {
  flight: Flight;
}

export const FlightListItem: React.FC<Props> = ({ flight }) => {
  const classes = useStyles();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();
  const flightCheapestTicketPrice = getFlightCheapestTicketPrice(
    flight.tickets,
  );
  const flightFreeTickets = getFlightFreeTickets(flight.tickets);

  const renderDesktopView = (): JSX.Element => (
    <Grid container justify="space-around" alignItems="center" wrap="nowrap">
      <Grid item xs={10}>
        <FlightListItemDetails flight={flight} />
      </Grid>
      <Grid item xs={2}>
        <Box className={classes.actionsBox} pl={1} ml={2}>
          <FlightListItemActions
            priceValuePLN={flightCheapestTicketPrice}
            freeTickets={flightFreeTickets}
          />
        </Box>
      </Grid>
    </Grid>
  );

  const rednerMobileView = (): JSX.Element => (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      wrap={mediumMediaBreakpointMatches ? "nowrap" : "wrap"}
    >
      <FlightListItemDetails flight={flight} />
      <Box
        className={classes.actionsBox}
        pl={mediumMediaBreakpointMatches ? 1 : 0}
        ml={mediumMediaBreakpointMatches ? 2 : 0}
      >
        <FlightListItemActions
          priceValuePLN={flightCheapestTicketPrice}
          freeTickets={flightFreeTickets}
        />
      </Box>
    </Grid>
  );

  return (
    <Paper className={classes.paper}>
      {mediumMediaBreakpointMatches ? renderDesktopView() : rednerMobileView()}
    </Paper>
  );
};
