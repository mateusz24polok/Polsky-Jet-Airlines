import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { CustomTextField } from "@components/shared/CustomTextField";
import { useStyles } from "./styles";

interface Props {
  amountSelectedEconomyTickets: number;
  amountSelectedPremiumTickets: number;
  amountSelectedStandardTickets: number;
}

export const TicketsSelection: React.FC<Props> = ({
  amountSelectedEconomyTickets,
  amountSelectedPremiumTickets,
  amountSelectedStandardTickets,
}) => {
  const classes = useStyles();

  const amountSelectedEconomyTicketsError =
    typeof amountSelectedEconomyTickets !== "number" ||
    amountSelectedEconomyTickets < 0;

  const amountSelectedStandardTicketsError =
    typeof amountSelectedStandardTickets !== "number" ||
    amountSelectedStandardTickets < 0;

  const amountSelectedPremiumTicketsError =
    typeof amountSelectedPremiumTickets !== "number" ||
    amountSelectedPremiumTickets < 0;

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
        InputProps={{ inputProps: { min: 0, max: 30 } }}
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
        InputProps={{ inputProps: { min: 0, max: 30 } }}
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
        InputProps={{ inputProps: { min: 0, max: 30 } }}
        error={amountSelectedPremiumTicketsError}
        helperText={
          amountSelectedPremiumTicketsError &&
          "Podano nieprawidłową ilość biletów"
        }
      />
    </Paper>
  );
};
