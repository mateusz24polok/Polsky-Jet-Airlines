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
import {
  getSelectedTicketAmountTextContent,
  getSelectedTicketSummaryValue,
} from "./helpers";
import { useStyles } from "./styles";

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
  const classes = useStyles();
  const { tickets } = flight;

  const summaryTicketsCost =
    amountSelectedEconomyTickets * tickets.economy.price +
    amountSelectedStandardTickets * tickets.standard.price +
    amountSelectedPremiumTickets * tickets.premium.price;

  return (
    <div className={classes.container}>
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
              <TableCell align="center">
                {getSelectedTicketAmountTextContent(
                  amountSelectedEconomyTickets,
                )}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText
                  valuePLN={getSelectedTicketSummaryValue(
                    amountSelectedEconomyTickets,
                    tickets.economy.price,
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Standard</TableCell>
              <TableCell align="center">
                {getSelectedTicketAmountTextContent(
                  amountSelectedStandardTickets,
                )}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText
                  valuePLN={getSelectedTicketSummaryValue(
                    amountSelectedStandardTickets,
                    tickets.standard.price,
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Premium</TableCell>
              <TableCell align="center">
                {getSelectedTicketAmountTextContent(
                  amountSelectedPremiumTickets,
                )}
              </TableCell>
              <TableCell align="center">
                <GenericPriceText
                  valuePLN={getSelectedTicketSummaryValue(
                    amountSelectedPremiumTickets,
                    tickets.premium.price,
                  )}
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Podsumowanie kosztów</TableCell>
              <TableCell align="center">
                <GenericPriceText
                  valuePLN={summaryTicketsCost >= 0 ? summaryTicketsCost : 0}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
