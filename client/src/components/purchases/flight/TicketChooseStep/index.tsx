import React from "react";
import { Grid } from "@material-ui/core";
import { TicketsPriceAndAvailability } from "./TicketsPriceAndAvailability";
import { TicketsSelection } from "./TicketsSelection";
import { TicketsSummary } from "./TicketsSummary";

export const TicketChooseStep: React.FC = () => {
  return (
    <Grid container wrap="nowrap" spacing={4}>
      <Grid item xs={4}>
        <TicketsSelection />
      </Grid>
      <Grid item xs={4}>
        <TicketsPriceAndAvailability />
      </Grid>
      <Grid item xs={4}>
        <TicketsSummary />
      </Grid>
    </Grid>
  );
};
