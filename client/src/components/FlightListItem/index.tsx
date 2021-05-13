import React from "react";
import { Divider, Grid, Paper } from "@material-ui/core";
import { FlightListItemActions } from "@components/FlightListItemActions";
import { FlightListItemDetails } from "@components/FlightListItemDetails";
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
  return (
    <Paper className={classes.paper}>
      <Grid container justify="space-around" alignItems="center" wrap="nowrap">
        <Grid item xs={9}>
          <FlightListItemDetails />
        </Grid>
        <Divider orientation="vertical" variant="fullWidth" />
        <Grid item xs={3}>
          <FlightListItemActions />
        </Grid>
      </Grid>
    </Paper>
  );
};
