import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  TextField as MuiTextField,
  Paper,
  Typography,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import { DatePicker } from "formik-material-ui-pickers";
import { Field, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import DateFnsUtils from "@date-io/date-fns";
import { OptionFormItem } from "@appTypes/shared/form";
import {
  fetchFlights,
  selectDestinationAirportCities,
  selectStartingAirportCities,
} from "@store/slices/flights";
import { useStyles } from "./styles";

// export const SearchEngine: React.FC = () => {
//   const classes = useStyles();

//   const dispatch = useDispatch();

//   const fligthSearchSchema = Yup.object().shape({
//     // ticketClass: Yup.string().required("Class of the ticket is required"),
//     startingCity: Yup.string().required("Starting city is required"),
//     destinationCity: Yup.string().required("Destination city is required"),
//     startingDate: Yup.date(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       startingCity: "Katowice",
//       destinationCity: "Atlanta",
//       startingDate: new Date(),
//     },
//     // validationSchema: { fligthSearchSchema },
//     onSubmit: values => console.log(values),
//   });

//   const handleChangeAutoComplete = (
//     e: React.ChangeEvent,
//     value: any,
//     fieldValue: string,
//   ) => {
//     console.log(value);
//     formik.setFieldValue(
//       fieldValue,
//       value !== null ? value : initialValues[fieldValue],
//     );
//   };

//   const renderTitle = (): JSX.Element => (
//     <Box mb={2}>
//       <Typography variant="h2">Wybierz swój lot</Typography>
//     </Box>
//   );

//   const renderFirstLine = (): JSX.Element => (
//     <Box mb={2}>
//       <Grid container wrap="nowrap" justify="space-between">
//         <Grid item>
//           <FormControl component="fieldset" fullWidth variant="outlined">
//             <RadioGroup
//               aria-label="gender"
//               name="gender1"
//               value={""}
//               onChange={() => {
//                 console.log("dupa");
//               }}
//             >
//               <Grid container wrap="nowrap">
//                 <Grid item>
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="W jedną stronę"
//                     style={{ width: "100%" }}
//                   />
//                 </Grid>
//                 <Grid item>
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="W obie strony"
//                     disabled
//                   />
//                 </Grid>
//               </Grid>
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item>
//           <FormControl fullWidth>
//             <Select
//               multiple
//               displayEmpty
//               value={["value1", "value2"]}
//               onChange={() => {
//                 console.log("dupa");
//               }}
//               input={<Input />}
//               renderValue={() => <em>Wybór klasy</em>}
//               // renderValue={selected => {
//               //   if ((selected as string[]).length === 0) {
//               //     return <em>Placeholder</em>;
//               //   }

//               //   return (selected as string[]).join(", ");
//               // }}
//               // MenuProps={MenuProps}
//               // inputProps={{ "aria-label": "Without label" }}
//             >
//               <MenuItem disabled value="">
//                 <em>Wybierz klasę</em>
//               </MenuItem>
//               <MenuItem>Klasa 1</MenuItem>
//               <MenuItem>Klasa 2</MenuItem>
//               <MenuItem>Klasa 3</MenuItem>
//               <MenuItem>Klasa 4</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//       </Grid>
//     </Box>
//   );

//   const renderSecondLine = (): JSX.Element => {
//     const handleFindClick = () => {
//       console.log("HandleClick Funkcja przeszła");
//       dispatch(fetchFlights());
//     };
//     return (
//       <Grid container spacing={2} alignItems="stretch">
//         <Grid item>
//           <ComboBox
//             id="startingCity"
//             name="startingCity"
//             options={["Katowice", "Atlanta", "Tokio"]}
//             value={formik.values.startingCity}
//             onChange={(e: React.ChangeEvent, value: any) =>
//               handleChangeAutoComplete(e, value, "startingCity")
//             }
//             label="Miejsce wylotu"
//           />
//         </Grid>

//         <Grid item>
//           <ComboBox
//             id="destinationCity"
//             name="destinationCity"
//             options={["Katowice", "Atlanta", "Tokio"]}
//             value={formik.values.destinationCity}
//             onChange={formik.handleChange}
//             label="Miejsce przylotu"
//           />
//         </Grid>
//         <Grid item>
//           <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker
//               autoOk
//               variant="inline"
//               inputVariant="outlined"
//               label="Data wylotu"
//               format="MM/dd/yyyy"
//               value={new Date()}
//               InputAdornmentProps={{ position: "start" }}
//               onChange={date => console.log(date)}
//             />
//           </MuiPickersUtilsProvider>
//         </Grid>

//         <Grid item>
//           <Button variant="outlined" style={{ height: "100%" }}>
//             <PersonAddIcon />
//             <Typography>1</Typography>
//           </Button>
//         </Grid>

//         <Grid item>
//           <Button
//             type="submit"
//             // onClick={handleFindClick}
//             variant="outlined"
//             style={{
//               height: "100%",
//               paddingLeft: "40px",
//               paddingRight: "40px",
//             }}
//           >
//             Szukaj
//           </Button>
//         </Grid>
//       </Grid>
//     );
//   };

//   return (
//     <Paper className={classes.root}>
//       <form onSubmit={formik.handleSubmit}>
//         {renderTitle()}
//         {renderFirstLine()}
//         {renderSecondLine()}
//       </form>
//     </Paper>
//   );
// };

const FlightSearchSchema = Yup.object().shape({
  startingCity: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  destinationCity: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  flightDateFrom: Yup.date().required("Data jest wymagana"),
  flightDateTo: Yup.date().min(
    Yup.ref("flightDateFrom"),
    "Data początkowa nie może być wcześniejsza niż końcowa",
  ),
});

export const SearchEngine: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const renderTitle = (): JSX.Element => (
    <Box mb={2}>
      <Typography variant="h2">Wybierz swój lot</Typography>
    </Box>
  );

  return (
    <Paper className={classes.root}>
      {renderTitle()}
      <Formik
        initialValues={{
          startingCity: { label: "Katowice", value: "Katowice" },
          destinationCity: { label: "Atlanta", value: "Atlanta" },
          flightDateFrom: new Date(),
          flightDateTo: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
        }}
        validationSchema={FlightSearchSchema}
        onSubmit={values => {
          console.log({
            startingCity: values.startingCity.value,
            destinationCity: values.destinationCity.value,
            flightDateFrom: values.flightDateFrom.toISOString(),
            flightDateTo: values.flightDateTo.toISOString(),
          });
          dispatch(
            fetchFlights({
              startingCity: values.startingCity.value,
              destinationCity: values.destinationCity.value,
              flightDateFrom: values.flightDateFrom.toISOString(),
              flightDateTo: values.flightDateTo.toISOString(),
            }),
          );
        }}
      >
        {({ submitForm, errors }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormikForm>
              <Field
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
                style={{ width: 300 }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <MuiTextField
                    {...params}
                    label="Miejsce wylotu"
                    variant="outlined"
                  />
                )}
              />
              <Field
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
                style={{ width: 300 }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <MuiTextField
                    {...params}
                    label="Miejsce przylotu"
                    variant="outlined"
                  />
                )}
              />
              <Field
                component={DatePicker}
                name="flightDateFrom"
                label="Najwcześniejsza data wylotu"
              />
              <Field
                component={DatePicker}
                name="flightDateTo"
                label="Najpóźniejsza data wylotu"
              />
              <Button
                variant="contained"
                color="primary"
                disabled={Object.keys(errors).length > 0}
                onClick={submitForm}
              >
                Submit
              </Button>
            </FormikForm>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </Paper>
  );
};
