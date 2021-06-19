import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { ManagementSiteTitle } from "@components/management/ManagementSiteTitle";
import {
  fetchFlights,
  selectFlights,
  selectIsProgress,
} from "@store/slices/flights";
import { FlightsDetailsTableRow } from "./FlightsDetailsTableRow";
import { useStyles } from "./styles";

export const FlightsDetailsTable: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const flights = useSelector(selectFlights);
  const isFlightsStateProgress = useSelector(selectIsProgress);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <Box className={classes.box} p={2}>
      {isFlightsStateProgress ? (
        <Grid
          className={classes.circularProgressContainer}
          container
          justify="center"
          alignItems="center"
        >
          <CircularProgress className={classes.circularProgress} size={64} />
        </Grid>
      ) : (
        <>
          <ManagementSiteTitle title="Polsku Jet Flights" />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Flight</TableCell>
                  <TableCell align="center">Start Date</TableCell>
                  <TableCell align="center">Start Airport</TableCell>
                  <TableCell align="center">Destination Airport</TableCell>
                  <TableCell align="center">Flight Time</TableCell>
                  <TableCell align="center">Tickets Left</TableCell>
                  <TableCell align="center">Tickets Prices</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map(flight => (
                  <FlightsDetailsTableRow
                    key={flight._id}
                    destinationAirport={flight.destinationAirport}
                    destinationCity={flight.destinationCity}
                    estimatedFlightTime={flight.estimatedFlightTime}
                    startingAirport={flight.startingAirport}
                    startingCity={flight.startingCity}
                    startingDate={flight.startingDate}
                    tickets={flight.tickets}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};
