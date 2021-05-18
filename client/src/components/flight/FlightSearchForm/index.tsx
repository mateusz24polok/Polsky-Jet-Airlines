import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField as MuiTextField,
  Paper,
  Typography,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Field, Formik, Form as FormikForm } from "formik";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import { DatePicker } from "formik-material-ui-pickers";
import * as Yup from "yup";
import { routesPaths } from "@resources/res.routesPaths";
import {
  selectDestinationAirportCities,
  selectStartingAirportCities,
} from "@store/slices/flights";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import { OptionFormItem } from "@appTypes/shared/form";
import {
  FlightsSearchFilters,
  FlightsSearchFormFiltersValues,
} from "@appTypes/flight";
import { prepareFlightsSearchFilters } from "./helpers";
import { useStyles } from "./styles";

const FlightSearchSchema = Yup.object().shape({
  startingCity: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  destinationCity: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  flightDateFrom: Yup.date()
    .max(
      Yup.ref("flightDateTo"),
      "Data początkowa nie może być późniejsza niż końcowa",
    )
    .required("Data początkowa jest wymagana"),
  flightDateTo: Yup.date()
    .min(
      Yup.ref("flightDateFrom"),
      "Data końcowa nie może być wcześniejsza niż początkowa",
    )
    .required("Data końcowa jest wymagana"),
});

export const FlightSearchForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const mediumMediaQuerryBreakpointMatches = useMediumBrekpointMatchesUp();

  const startingAirportCityOptions: OptionFormItem[] = useSelector(
    selectStartingAirportCities,
  ).map(airportCity => ({
    label: airportCity,
    value: airportCity,
  }));

  const destinationAirportCityOptions: OptionFormItem[] = useSelector(
    selectDestinationAirportCities,
  ).map(airportCity => ({
    label: airportCity,
    value: airportCity,
  }));

  const formInitialValues: FlightsSearchFormFiltersValues = {
    startingCity: { label: "Katowice", value: "Katowice" },
    destinationCity: { label: "Atlanta", value: "Atlanta" },
    flightDateFrom: new Date(),
    flightDateTo: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
  };

  const goToTheFlightList = (flightsQueryParams: FlightsSearchFilters) => {
    history.push(
      prepareQueryParamsURLFromObject(
        { ...flightsQueryParams },
        routesPaths.searchedFlightsList,
      ),
    );
  };

  const renderTitle = (): JSX.Element => (
    <Box mb={2}>
      <Typography
        variant={mediumMediaQuerryBreakpointMatches ? "h2" : "h4"}
        align="center"
      >
        Wybierz swój lot
      </Typography>
    </Box>
  );

  return (
    <Paper className={classes.root}>
      {renderTitle()}
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        validationSchema={FlightSearchSchema}
        onSubmit={values => {
          goToTheFlightList(prepareFlightsSearchFilters(values));
        }}
      >
        {({ handleReset, submitForm, errors, initialValues, values }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormikForm>
              <Grid container direction="column" spacing={3}>
                <Grid
                  container
                  item
                  direction={
                    mediumMediaQuerryBreakpointMatches ? "row" : "column"
                  }
                  justify="space-between"
                  alignItems="center"
                >
                  <Field
                    className={classes.autocomplete}
                    name="startingCity"
                    component={Autocomplete}
                    options={startingAirportCityOptions}
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
                        label="Miejsce wylotu"
                        variant="outlined"
                      />
                    )}
                  />
                  <Field
                    className={classes.autocomplete}
                    name="destinationCity"
                    component={Autocomplete}
                    options={destinationAirportCityOptions}
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
                        label="Miejsce przylotu"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid
                  container
                  item
                  wrap="nowrap"
                  direction={
                    mediumMediaQuerryBreakpointMatches ? "row" : "column"
                  }
                  justify="space-between"
                >
                  <Field
                    component={DatePicker}
                    className={classes.datepicker}
                    name="flightDateFrom"
                    label="Najwcześniejsza data wylotu"
                    inputVariant="outlined"
                    minDate={Date.now()}
                    format="dd/MM/yyyy"
                  />
                  <Field
                    component={DatePicker}
                    className={classes.datepicker}
                    name="flightDateTo"
                    label="Najpóźniejsza data wylotu"
                    inputVariant="outlined"
                    minDate={Date.now()}
                    format="dd/MM/yyyy"
                  />
                </Grid>
                <Grid
                  container
                  item
                  direction={
                    mediumMediaQuerryBreakpointMatches ? "row" : "column"
                  }
                  spacing={mediumMediaQuerryBreakpointMatches ? 0 : 3}
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      disabled={
                        JSON.stringify(initialValues) === JSON.stringify(values)
                      }
                      onClick={handleReset}
                    >
                      Reset formularza
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      disabled={Object.keys(errors).length > 0}
                      onClick={submitForm}
                    >
                      Wyszukaj loty
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </FormikForm>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </Paper>
  );
};