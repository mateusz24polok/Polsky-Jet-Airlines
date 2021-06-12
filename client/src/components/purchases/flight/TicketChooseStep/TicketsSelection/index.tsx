import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { CustomTextField } from "@components/shared/CustomTextField";
import { Flight } from "@appTypes/flight";
import { useStyles } from "./styles";

interface Props {
  flight: Flight;
  amountSelectedEconomyTickets: number;
  amountSelectedPremiumTickets: number;
  amountSelectedStandardTickets: number;
}

export const TicketsSelection: React.FC<Props> = ({
  flight,
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
}) => {
  const classes = useStyles();
  const { tickets } = flight;

  const amountSelectedEconomyTicketsError =
    typeof amountSelectedEconomyTickets !== "number" ||
    amountSelectedEconomyTickets < 0 ||
    amountSelectedEconomyTickets > tickets.economy.amount;

  const amountSelectedStandardTicketsError =
    typeof amountSelectedStandardTickets !== "number" ||
    amountSelectedStandardTickets < 0 ||
    amountSelectedStandardTickets > tickets.standard.amount;

  const amountSelectedPremiumTicketsError =
    typeof amountSelectedPremiumTickets !== "number" ||
    amountSelectedPremiumTickets < 0 ||
    amountSelectedPremiumTickets > tickets.premium.amount;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
        Wybierz ilość biletów
      </Typography>
      <CustomTextField
        className={classes.input}
        type="number"
        name="economyTickets"
        label="Liczba biletów klasy ekonomicznej"
        variant="outlined"
        fullWidth={true}
        InputProps={{
          inputProps: {
            min: 0,
            max: tickets.economy.amount,
          },
        }}
        error={amountSelectedEconomyTicketsError}
        helperText={
          amountSelectedEconomyTicketsError &&
          "Podano nieprawidłową ilość biletów"
        }
      />

      <CustomTextField
        className={classes.input}
        type="number"
        name="standardTickets"
        label="Liczba biletów klasy standard"
        variant="outlined"
        fullWidth={true}
        InputProps={{
          inputProps: {
            min: 0,
            max: tickets.standard.amount,
          },
        }}
        error={amountSelectedStandardTicketsError}
        helperText={
          amountSelectedStandardTicketsError &&
          "Podano nieprawidłową ilość biletów"
        }
      />
      <CustomTextField
        className={classes.input}
        type="number"
        name="premiumTickets"
        label="Liczba biletów klasy premium"
        variant="outlined"
        fullWidth={true}
        InputProps={{
          inputProps: {
            min: 0,
            max: tickets.premium.amount,
          },
        }}
        error={amountSelectedPremiumTicketsError}
        helperText={
          amountSelectedPremiumTicketsError &&
          "Podano nieprawidłową ilość biletów"
        }
      />
    </Paper>
  );
};
