import React from "react";
import { Grid } from "@material-ui/core";
import { Flight } from "@appTypes/flight";
import { TicketsPriceAndAvailability } from "./TicketsPriceAndAvailability";
import { TicketsSelection } from "./TicketsSelection";
import { TicketsSummary } from "./TicketsSummary";

interface Props {
  flight: Flight;
}

export const TicketChooseStep: React.FC<Props> = ({ flight }) => {
  return (
    <Grid container wrap="nowrap" spacing={4}>
      <Grid item xs={4}>
        <TicketsSelection />
      </Grid>
      <Grid item xs={4}>
        <TicketsPriceAndAvailability flight={flight} />
      </Grid>
      <Grid item xs={4}>
        <TicketsSummary />
      </Grid>
    </Grid>
  );
};
