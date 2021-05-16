import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { FlightListItemActions } from "@components/flight/FlightListItemActions";
import { FlightListItemDetails } from "@components/flight/FlightListItemDetails";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { Currency } from "@appTypes/shared/money";
import { useStyles } from "./styles";

// const flight = {
//   status: "OPEN",
//   startingAirport: {
//     city: "Katowice",
//     country: "Poland",
//     continent: "Europe",
//     airport: "Pyżowice",
//     airportKey: "KATPYŻ01",
//     terminals: ["A11", "B35", "C31"],
//     startingPoint: true,
//     destinationPoint: false,
//   },
//   destinationAirport: {
//     city: "Atlanta",
//     country: "USA",
//     continent: "North America",
//     airport: "Hartsfield-Jackson",
//     airportKey: "ATLHTJ01",
//     terminals: ["A11", "B35", "C31", "D2", "E54", "F77"],
//     startingPoint: false,
//     destinationPoint: true,
//   },
//   startingDate: "2021-05-10T16:00:00Z",
//   tickets: [
//     {
//       status: "OPEN",
//       price: {
//         value: 100,
//         currency: "PLN",
//       },
//       class: "ECONOMY",
//       airplanePosition: "EC01",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 100,
//         currency: "PLN",
//       },
//       class: "ECONOMY",
//       airplanePosition: "EC02",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 100,
//         currency: "PLN",
//       },
//       class: "ECONOMY",
//       airplanePosition: "EC03",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 150,
//         currency: "PLN",
//       },
//       class: "STANDARD",
//       airplanePosition: "ST01",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 150,
//         currency: "PLN",
//       },
//       class: "STANDARD",
//       airplanePosition: "ST02",
//     },
//     {
//       status: "CLOSED",
//       price: {
//         value: 150,
//         currency: "PLN",
//       },
//       class: "STANDARD",
//       airplanePosition: "ST03",
//     },
//     {
//       status: "CLOSED",
//       price: {
//         value: 150,
//         currency: "PLN",
//       },
//       class: "STANDARD",
//       airplanePosition: "ST04",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 250,
//         currency: "PLN",
//       },
//       class: "PREMIUM",
//       airplanePosition: "PR01",
//     },
//     {
//       status: "OPEN",
//       price: {
//         value: 252,
//         currency: "PLN",
//       },
//       class: "PREMIUM",
//       airplanePosition: "PR02",
//     },
//     {
//       status: "CLOSED",
//       price: {
//         value: 250,
//         currency: "PLN",
//       },
//       class: "PREMIUM",
//       airplanePosition: "PR03",
//     },
//   ],
//   estimatedFlightTime: 240,
// };

export const FlightListItem = () => {
  const classes = useStyles();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const renderDesktopView = (): JSX.Element => (
    <Grid container justify="space-around" alignItems="center" wrap="nowrap">
      <Grid item xs={10}>
        <FlightListItemDetails />
      </Grid>
      <Grid item xs={2}>
        <Box className={classes.actionsBox} pl={1} ml={2}>
          <FlightListItemActions
            price={{ value: 960, currency: Currency.PLN }}
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
      <FlightListItemDetails />
      <Box
        className={classes.actionsBox}
        pl={mediumMediaBreakpointMatches ? 1 : 0}
        ml={mediumMediaBreakpointMatches ? 2 : 0}
      >
        <FlightListItemActions price={{ value: 960, currency: Currency.PLN }} />
      </Box>
    </Grid>
  );

  return (
    <Paper className={classes.paper}>
      {mediumMediaBreakpointMatches ? renderDesktopView() : rednerMobileView()}
    </Paper>
  );
};
