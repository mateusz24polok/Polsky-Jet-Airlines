import React from "react";
import { Grid } from "@material-ui/core";
import { Flight } from "@appTypes/flight";
import { TicketsPriceAndAvailability } from "./TicketsPriceAndAvailability";
import { TicketsSelection } from "./TicketsSelection";
import { TicketsSummary } from "./TicketsSummary";

interface Props {
  flight: Flight;
  amountSelectedEconomyTickets: number;
  amountSelectedStandardTickets: number;
  amountSelectedPremiumTickets: number;
}

export const TicketChooseStep: React.FC<Props> = ({
  flight,
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
}) => {
  return (
    <Grid container wrap="nowrap" spacing={4}>
      <Grid item xs={4}>
        <TicketsSelection />
      </Grid>
      <Grid item xs={4}>
        <TicketsPriceAndAvailability
          flight={flight}
          amountSelectedEconomyTickets={amountSelectedEconomyTickets}
          amountSelectedPremiumTickets={amountSelectedPremiumTickets}
          amountSelectedStandardTickets={amountSelectedStandardTickets}
        />
      </Grid>
      <Grid item xs={4}>
        <TicketsSummary
          flight={flight}
          amountSelectedEconomyTickets={amountSelectedEconomyTickets}
          amountSelectedPremiumTickets={amountSelectedPremiumTickets}
          amountSelectedStandardTickets={amountSelectedStandardTickets}
        />
      </Grid>
    </Grid>
  );
};
