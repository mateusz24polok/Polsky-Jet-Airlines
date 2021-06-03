import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { CustomTextField } from "@components/shared/CustomTextField";
import { useStyles } from "./styles";

export const TicketsSelection: React.FC = () => {
  const classes = useStyles();

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
      />

      <CustomTextField
        className={classes.input}
        type="number"
        name="standardTickets"
        label="Liczba biletów klasy standard"
        variant="outlined"
        fullWidth={true}
        InputProps={{ inputProps: { min: 0, max: 30 } }}
      />
      <CustomTextField
        className={classes.input}
        type="number"
        name="premiumTickets"
        label="Liczba biletów klasy premium"
        variant="outlined"
        fullWidth={true}
        InputProps={{ inputProps: { min: 0, max: 30 } }}
      />
    </Paper>
  );
};
