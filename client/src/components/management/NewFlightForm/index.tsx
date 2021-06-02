import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  TextField as MuiTextField,
  Paper,
} from "@material-ui/core";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import { Field, Formik, Form as FormikForm } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker } from "formik-material-ui-pickers";
import { CustomTextField } from "@components/shared/CustomTextField";
import { ManagementSiteTitle } from "@components/management/ManagementSiteTitle";
import { selectAirports } from "@store/slices/airports";
import { createFlight } from "@store/slices/flights";
import { Airport } from "@appTypes/airport";
import { CreateFlightFormFormat } from "@appTypes/flight";
import { OptionFormItem } from "@appTypes/shared/form";
import { CreateFlightSchema } from "./schema";
import { getCreateFlightRequest } from "./helpers";
import { useStyle } from "./styles";

export const NewFlightForm: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const airports = useSelector(selectAirports);

  const startingAirportOptions: OptionFormItem<Airport>[] = airports
    .filter(airport => airport.startingPoint)
    .map(airport => ({
      label: `${airport.city} (${airport.airportKey})`,
      value: airport,
    }));

  const destinationAirportOptions: OptionFormItem<Airport>[] = airports
    .filter(airport => airport.destinationPoint)
    .map(airport => ({
      label: `${airport.city} (${airport.airportKey})`,
      value: airport,
    }));

  const formInitialValues: CreateFlightFormFormat = {
    destinationAirport: destinationAirportOptions[0] || null,
    startingAirport: startingAirportOptions[0] || null,
    estimatedFlightTime: 0,
    startingDate: new Date(),
    ticketsAmountEconomy: 30,
    ticketsAmountPremium: 30,
    ticketsAmountStandard: 30,
    ticketPriceEconomy: 1,
    ticketPricePremium: 1,
    ticketPriceStandard: 1,
  };

  return (
    <Box p={2}>
      <ManagementSiteTitle title="Dodaj nowy lot" />
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize={true}
          initialValues={formInitialValues}
          validationSchema={CreateFlightSchema}
          onSubmit={values => {
            dispatch(createFlight(getCreateFlightRequest(values)));
          }}
        >
          {({
            handleReset,
            submitForm,
            errors,
            initialValues,
            values,
            touched,
          }) => {
            return (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <FormikForm>
                  <Field
                    error={
                      touched.startingAirport
                        ? errors.startingAirport
                        : undefined
                    }
                    className={classes.input}
                    name="startingAirport"
                    component={Autocomplete}
                    options={startingAirportOptions}
                    getOptionLabel={(option: OptionFormItem<Airport>) =>
                      option ? option.label : ""
                    }
                    getOptionSelected={(
                      option: OptionFormItem<Airport>,
                      value: OptionFormItem<Airport>,
                    ) => option.value === value.value}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                      <MuiTextField
                        {...params}
                        label="Lotnisko startowe"
                        variant="outlined"
                        error={Boolean(errors.startingAirport)}
                        helperText={errors.startingAirport}
                      />
                    )}
                  />
                  <Field
                    className={classes.input}
                    name="destinationAirport"
                    component={Autocomplete}
                    options={destinationAirportOptions}
                    getOptionLabel={(option: OptionFormItem<Airport>) =>
                      option ? option.label : ""
                    }
                    getOptionSelected={(
                      option: OptionFormItem<Airport>,
                      value: OptionFormItem<Airport>,
                    ) => option.value === value.value}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                      <MuiTextField
                        {...params}
                        label="Lotnisko docelowe"
                        variant="outlined"
                        error={Boolean(errors.destinationAirport)}
                        helperText={errors.destinationAirport}
                      />
                    )}
                  />
                  <Field
                    component={DateTimePicker}
                    className={classes.input}
                    name="startingDate"
                    label="Data wylotu"
                    inputVariant="outlined"
                    minDate={Date.now()}
                    format="dd/MM/yyyy"
                    fullWidth={true}
                  />
                  <CustomTextField
                    className={classes.input}
                    name="estimatedFlightTime"
                    label="Przewidywany czas lotu"
                    variant="outlined"
                    type="number"
                    fullWidth={true}
                  />
                  <Grid container wrap="nowrap">
                    <CustomTextField
                      className={`${classes.input} ${classes.ticketsAmountInput}`}
                      name="ticketsAmountEconomy"
                      label="Ilość biletów klasy Economy"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                    <CustomTextField
                      className={classes.input}
                      name="ticketPriceEconomy"
                      label="Cena biletów klasy Economy [PLN]"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid container wrap="nowrap">
                    <CustomTextField
                      className={`${classes.input} ${classes.ticketsAmountInput}`}
                      name="ticketsAmountPremium"
                      label="Ilość biletów klasy Premium"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                    <CustomTextField
                      className={classes.input}
                      name="ticketPricePremium"
                      label="Cena biletów klasy Premium [PLN]"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid container wrap="nowrap">
                    <CustomTextField
                      className={`${classes.input} ${classes.ticketsAmountInput}`}
                      name="ticketsAmountStandard"
                      label="Ilość biletów klasy Standard"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                    <CustomTextField
                      className={classes.input}
                      name="ticketPriceStandard"
                      label="Cena biletów klasy Standard [PLN]"
                      variant="outlined"
                      type="number"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid container justify="flex-end">
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      disabled={
                        JSON.stringify(initialValues) === JSON.stringify(values)
                      }
                      onClick={handleReset}
                    >
                      Resetuj
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      disabled={Object.keys(errors).length > 0}
                      onClick={async () => {
                        await submitForm();
                        handleReset();
                      }}
                    >
                      Dodaj
                    </Button>
                  </Grid>
                </FormikForm>
              </MuiPickersUtilsProvider>
            );
          }}
        </Formik>
      </Paper>
    </Box>
  );
};
