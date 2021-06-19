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
  fetchAirports,
  selectAirports,
  selectIsProgress,
} from "@store/slices/airports";
import { R } from "@resources/res";
import { AirportDetailsTableRow } from "./AirportsDetailsTableRow";
import { useStyles } from "./styles";

export const AirportsDetailsTable: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const airports = useSelector(selectAirports);
  const isAirportStateProgress = useSelector(selectIsProgress);

  useEffect(() => {
    dispatch(fetchAirports());
  }, [dispatch]);

  return (
    <Box p={2} className={classes.box}>
      {isAirportStateProgress ? (
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
          <ManagementSiteTitle title="Polsky Jet Airports" />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Airport Name</TableCell>
                  <TableCell align="center">Place</TableCell>
                  <TableCell align="center">Continent</TableCell>
                  <TableCell align="center">Starting Point</TableCell>
                  <TableCell align="center">Destination Point</TableCell>
                  <TableCell align="center">Terminals</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {airports.map(airport => (
                  <AirportDetailsTableRow
                    key={airport._id}
                    image={
                      airport.airportPhoto || R.images.cities.BrusselsPhoto
                    }
                    airport={airport.airport}
                    airportKey={airport.airportKey}
                    city={airport.city}
                    continent={airport.continent}
                    country={airport.country}
                    destinationPoint={airport.destinationPoint}
                    startingPoint={airport.startingPoint}
                    terminals={airport.terminals}
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
