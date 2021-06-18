import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { Formik, Form as FormikForm } from "formik";
import { ManagementSiteTitle } from "@components/management/ManagementSiteTitle";
import { CustomTextField } from "@components/shared/CustomTextField";
import { CustomSelectField } from "@components/shared/CustomSelectField";
import { CustomCheckbox } from "@components/shared/CustomCheckbox";
import { CustomFileUploadInput } from "@components/shared/CustomFileUploadInput";
import { createAirports } from "@store/slices/airports";
import { Continent, CreateAirportRequest, continents } from "@appTypes/airport";
import { OptionFormItem } from "@appTypes/shared/form";
import { NewAirportSchema } from "./schema";
import { useStyles } from "./styles";

export const NewAirportForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>();

  const continentsFormOptions: OptionFormItem<Continent>[] = continents.map(
    continent => ({
      label: continent,
      value: continent,
    }),
  );

  const formInitialValues: CreateAirportRequest = {
    airport: "",
    airportKey: "",
    city: "",
    continent: Continent.EUROPE,
    country: "",
    destinationPoint: true,
    startingPoint: false,
    terminals: [],
    airportPhoto: null,
  };

  return (
    <Box p={3}>
      <ManagementSiteTitle title="Dodaj nowe lotnisko" />
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize={true}
          initialValues={formInitialValues}
          validationSchema={NewAirportSchema}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onReset={values => {
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}
          onSubmit={values => {
            const formData = new FormData();
            formData.append("airport", values.airport);
            formData.append("airportKey", values.airportKey);
            formData.append("city", values.city);
            formData.append("continent", values.continent);
            formData.append("country", values.country);
            formData.append(
              "destinationPoint",
              values.destinationPoint ? "true" : "false",
            );
            formData.append(
              "startingPoint",
              values.startingPoint ? "true" : "false",
            );
            formData.append("terminals", String(values.terminals));
            formData.append("airportPhoto", values.airportPhoto || "");

            dispatch(createAirports(formData));
          }}
        >
          {({ handleReset, submitForm, errors, initialValues, values }) => (
            <FormikForm>
              <Grid container direction="column">
                <Grid item>
                  <CustomTextField
                    className={classes.input}
                    name="airport"
                    label="Airport Name"
                    variant="outlined"
                  />
                  <CustomTextField
                    className={classes.input}
                    name="airportKey"
                    label="Airport Key"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <CustomSelectField
                    className={classes.input}
                    name="continent"
                    label="Airport Continent"
                    options={continentsFormOptions}
                  />
                  <CustomTextField
                    className={classes.input}
                    name="country"
                    label="Airport Country"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <CustomTextField
                    className={classes.input}
                    name="city"
                    label="Airport City"
                    variant="outlined"
                  />
                  <CustomTextField
                    className={classes.input}
                    name="terminals"
                    label="Airport Terminals"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <CustomCheckbox
                    className={classes.checkbox}
                    name="destinationPoint"
                    label="Destination Point"
                  />
                  <CustomCheckbox
                    className={classes.checkbox}
                    name="startingPoint"
                    label="Starting Point"
                  />
                </Grid>
                <Grid item>
                  <CustomFileUploadInput
                    name="airportPhoto"
                    inputRef={fileInputRef}
                  />
                </Grid>
                {values.airportPhoto && (
                  <Grid item>
                    <Box m={2}>
                      <img
                        width={200}
                        src={URL.createObjectURL(values.airportPhoto)}
                        alt="Airport"
                      />
                    </Box>
                  </Grid>
                )}
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
              </Grid>
            </FormikForm>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};
