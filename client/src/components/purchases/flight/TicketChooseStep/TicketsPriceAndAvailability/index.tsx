import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";
import { Flight } from "@appTypes/flight";
import { useStyles } from "./styles";

interface Props {
  flight: Flight;
  amountSelectedEconomyTickets: number;
  amountSelectedStandardTickets: number;
  amountSelectedPremiumTickets: number;
}

export const TicketsPriceAndAvailability: React.FC<Props> = ({
  flight,
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
}) => {
  const classes = useStyles();
  const { tickets } = flight;

  return (
    <div className={classes.container}>
      <TableContainer className={classes.paper} component={Paper}>
        <Typography variant="h6" align="center">
          Dostępność biletów
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Klasa</TableCell>
              <TableCell align="center">Dostępne bilety</TableCell>
              <TableCell align="center">Cena pojedynczego biletu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="justify">Ekonomiczna</TableCell>
              <TableCell align="center">
                {tickets.economy.amount - amountSelectedEconomyTickets}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText valuePLN={tickets.economy.price} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Standard</TableCell>
              <TableCell align="center">
                {tickets.standard.amount - amountSelectedStandardTickets}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText valuePLN={tickets.standard.price} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Premium</TableCell>
              <TableCell align="center">
                {tickets.premium.amount - amountSelectedPremiumTickets}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText valuePLN={tickets.premium.price} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
