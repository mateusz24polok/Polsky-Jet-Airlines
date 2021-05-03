import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ComboBox } from "@components/shared/ComboBox";
import DateFnsUtils from "@date-io/date-fns";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { fetchFlights } from "@store/slices/flights";
import { useStyles } from "./styles";
// import { Formik, Form as FormikForm, Field } from "formik";
// import { TextField } from "formik-material-ui";
// import { DatePicker } from "formik-material-ui-pickers";

const renderTitle = (): JSX.Element => (
  <Box mb={2}>
    <Typography variant="h2">Wybierz swój lot</Typography>
  </Box>
);

const renderFirstLine = (): JSX.Element => (
  <Box mb={2}>
    <Grid container wrap="nowrap" justify="space-between">
      <Grid item>
        <FormControl component="fieldset" fullWidth variant="outlined">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={""}
            onChange={() => {
              console.log("dupa");
            }}
          >
            <Grid container wrap="nowrap">
              <Grid item>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="W jedną stronę"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="W obie strony"
                  disabled
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <Select
            multiple
            displayEmpty
            value={["value1", "value2"]}
            onChange={() => {
              console.log("dupa");
            }}
            input={<Input />}
            renderValue={() => <em>Wybór klasy</em>}
            // renderValue={selected => {
            //   if ((selected as string[]).length === 0) {
            //     return <em>Placeholder</em>;
            //   }

            //   return (selected as string[]).join(", ");
            // }}
            // MenuProps={MenuProps}
            // inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Wybierz klasę</em>
            </MenuItem>
            <MenuItem>Klasa 1</MenuItem>
            <MenuItem>Klasa 2</MenuItem>
            <MenuItem>Klasa 3</MenuItem>
            <MenuItem>Klasa 4</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  </Box>
);

const RenderSecondLine = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleFindClick = () => {
    console.log("HandleClick Funkcja przeszła");
    dispatch(fetchFlights());
  };
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item>
        <ComboBox label="Miejsce wylotu" />
      </Grid>

      <Grid item>
        <ComboBox label="Miejsce przylotu" />
      </Grid>
      <Grid item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Data wylotu"
            format="MM/dd/yyyy"
            value={new Date()}
            InputAdornmentProps={{ position: "start" }}
            onChange={date => console.log(date)}
          />
        </MuiPickersUtilsProvider>
      </Grid>

      <Grid item>
        <Button variant="outlined" style={{ height: "100%" }}>
          <PersonAddIcon />
          <Typography>1</Typography>
        </Button>
      </Grid>

      <Grid item>
        <Button
          onClick={handleFindClick}
          variant="outlined"
          style={{
            height: "100%",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          Szukaj
        </Button>
      </Grid>
    </Grid>
  );
};

export const SearchEngine: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {renderTitle()}
      {renderFirstLine()}
      {RenderSecondLine()}
    </Paper>
  );
};
