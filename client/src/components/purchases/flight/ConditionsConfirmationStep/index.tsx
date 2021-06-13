import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";
import { CustomCheckbox } from "@components/shared/CustomCheckbox";
import { selectIsLoggedIn, showLoginPopup } from "@store/slices/auth";
import { getNextDateAfterTimeElapsed } from "@utils/dateUtils";
import { Flight } from "@appTypes/flight";
import { useStyles } from "./styles";

interface Props {
  flight: Flight;
  amountSelectedEconomyTickets: number;
  amountSelectedStandardTickets: number;
  amountSelectedPremiumTickets: number;
}

export const ConditionConfirmationStep: React.FC<Props> = ({
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
  flight,
}) => {
  const classes = useStyles();
  const {
    destinationAirport,
    startingAirport,
    tickets,
    startingDate,
    estimatedFlightTime,
  } = flight;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLoginPopupOpen = () => {
    dispatch(showLoginPopup());
  };

  return (
    <Box m={2}>
      <Typography className={classes.title} variant="h5" align="center">
        Podusmowanie zamówienia
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Początek Lotu</TableCell>
              <TableCell>Koniec Lotu</TableCell>
              <TableCell>Zamówione Bilety</TableCell>
              <TableCell>Koszt zamówienia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <p>{startingAirport.city}</p>
                <p>
                  {startingAirport.airport} ({startingAirport.airportKey})
                </p>
                <p>
                  {new Date(startingDate).toLocaleDateString()}{" "}
                  {new Date(startingDate).toLocaleTimeString()}
                </p>
              </TableCell>
              <TableCell>
                <p>{destinationAirport.city}</p>
                <p>
                  {destinationAirport.airport} ({destinationAirport.airportKey})
                </p>
                <p>
                  {new Date(
                    getNextDateAfterTimeElapsed(
                      startingDate,
                      estimatedFlightTime,
                    ),
                  ).toLocaleDateString()}{" "}
                  {new Date(
                    getNextDateAfterTimeElapsed(
                      startingDate,
                      estimatedFlightTime,
                    ),
                  ).toLocaleTimeString()}
                </p>
              </TableCell>
              <TableCell>
                <p>Klasa ekonomiczna: {amountSelectedEconomyTickets}</p>
                <p>Klasa standard: {amountSelectedStandardTickets}</p>
                <p>Klasa premium: {amountSelectedPremiumTickets}</p>
              </TableCell>
              <TableCell>
                <GenericPriceText
                  valuePLN={
                    amountSelectedEconomyTickets * tickets.economy.price +
                    amountSelectedStandardTickets * tickets.standard.price +
                    amountSelectedPremiumTickets * tickets.premium.price
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                {isLoggedIn ? (
                  <CustomCheckbox
                    name="confirmPurchase"
                    label="Potwierdź chęć zamówienia"
                  />
                ) : (
                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    onClick={handleLoginPopupOpen}
                  >
                    Zaloguj się aby móc zamówić bilet
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};
