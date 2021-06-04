import React from "react";
import {
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
import { Flight } from "@appTypes/flight";

interface Props {
  flight: Flight;
  amountSelectedEconomyTickets: number;
  amountSelectedStandardTickets: number;
  amountSelectedPremiumTickets: number;
}

export const TicketsSummary: React.FC<Props> = ({
  flight,
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
}) => {
  const { tickets } = flight;
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" align="center">
        Podsumowanie wyboru biletów
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Klasa</TableCell>
            <TableCell align="center">Szt. Wybranych biletów</TableCell>
            <TableCell align="center">Koszt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="justify">Ekonomiczna</TableCell>
            <TableCell align="center">{amountSelectedEconomyTickets}</TableCell>
            <TableCell align="center">
              <GenericPriceText
                valuePLN={amountSelectedEconomyTickets * tickets.economy.price}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standard</TableCell>
            <TableCell align="center">
              {amountSelectedStandardTickets}
            </TableCell>
            <TableCell align="center">
              <GenericPriceText
                valuePLN={
                  amountSelectedStandardTickets * tickets.standard.price
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Premium</TableCell>
            <TableCell align="center">{amountSelectedPremiumTickets}</TableCell>
            <TableCell align="center">
              <GenericPriceText
                valuePLN={amountSelectedPremiumTickets * tickets.premium.price}
              />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Podsumowanie kosztów</TableCell>
            <TableCell align="center">
              <GenericPriceText
                valuePLN={
                  amountSelectedEconomyTickets * tickets.economy.price +
                  amountSelectedStandardTickets * tickets.standard.price +
                  amountSelectedPremiumTickets * tickets.premium.price
                }
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
