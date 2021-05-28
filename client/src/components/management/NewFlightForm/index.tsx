import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  TextField as MuiTextField,
  Paper,
  Typography,
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
import { selectAirports } from "@store/slices/airports";
import { CreateFlightFormFormat } from "@appTypes/flight";
import { OptionFormItem } from "@appTypes/shared/form";
import { CreateFlightSchema } from "./schema";
import { useStyle } from "./styles";

export const NewFlightForm: React.FC = () => {
  const classes = useStyle();
  const airports = useSelector(selectAirports);

  console.log(airports);

  const startingAirportOptions: OptionFormItem[] = airports
    .filter(airport => airport.startingPoint)
    .map(airport => ({
      label: `${airport.city} (${airport.airportKey})`,
      value: airport,
    }));

  const destinationAirportOptions: OptionFormItem[] = airports
    .filter(airport => airport.destinationPoint)
    .map(airport => ({
      label: `${airport.city} (${airport.airportKey})`,
      value: airport,
    }));

  const renderTitle = (): JSX.Element => (
    <Box mb={2}>
      <Typography variant="h5" align="center">
        Dodaj nowy lot
      </Typography>
    </Box>
  );

  const formInitialValues: CreateFlightFormFormat = {
    destinationAirport: destinationAirportOptions[0] || null,
    startingAirport: startingAirportOptions[0] || null,
    estimatedFlightTime: 0,
    startingDate: new Date(),
    ticketsLeftEconomy: 30,
    ticketsLeftPremium: 30,
    ticketsLeftStandard: 30,
  };

  return (
    <Box p={2}>
      {renderTitle()}
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize={true}
          initialValues={formInitialValues}
          validationSchema={CreateFlightSchema}
          onSubmit={values => {
            console.log(values);
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
            console.log(errors);
            return (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <FormikForm>
                  <Field
                    error={Boolean(
                      touched.startingAirport && errors.startingAirport,
                    )}
                    className={classes.input}
                    name="startingAirport"
                    component={Autocomplete}
                    options={startingAirportOptions}
                    getOptionLabel={(option: OptionFormItem) =>
                      option ? option.label : ""
                    }
                    getOptionSelected={(
                      option: OptionFormItem,
                      value: OptionFormItem,
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
                    getOptionLabel={(option: OptionFormItem) =>
                      option ? option.label : ""
                    }
                    getOptionSelected={(
                      option: OptionFormItem,
                      value: OptionFormItem,
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
                  <CustomTextField
                    className={classes.input}
                    name="ticketsLeftEconomy"
                    label="Ilość biletów klasy ekonomicznej"
                    variant="outlined"
                    type="number"
                    fullWidth={true}
                  />
                  <CustomTextField
                    className={classes.input}
                    name="ticketsLeftPremium"
                    label="Ilość biletów klasy Premium"
                    variant="outlined"
                    type="number"
                    fullWidth={true}
                  />
                  <CustomTextField
                    className={classes.input}
                    name="ticketsLeftStandard"
                    label="Ilość biletów klasy Standard"
                    variant="outlined"
                    type="number"
                    fullWidth={true}
                  />
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
