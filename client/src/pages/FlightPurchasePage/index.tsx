import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { FlightTicketPurchaseForm } from "@components/purchases/flight/FlightTicketPurchaseForm";
import { useStyles } from "./styles";

export const FlightPurchasePage: React.FC = () => {
  const classes = useStyles();
  const params = useParams<{ id: string }>();
  const flightId = params.id;

  return (
    <Box>
      <Typography className={classes.title} variant="h5" align="center">
        Zamówienie dla lotu nr {flightId}
      </Typography>
      <FlightTicketPurchaseForm flightId={flightId} />
    </Box>
  );
};
