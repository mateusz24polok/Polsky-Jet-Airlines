import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { fetchFlights, selectFlights } from "@store/slices/flights";
import { FlightsDetailsTableRow } from "./FlightsDetailsTableRow";
import { useStyles } from "./styles";

export const FlightsDetailsTable: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const flights = useSelector(selectFlights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <Box p={2}>
      <Typography className={classes.title} variant="h5" align="center">
        Polsky Jet Flights
      </Typography>
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
                ticketsLeft={flight.ticketsLeft}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
