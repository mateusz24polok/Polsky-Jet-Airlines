import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { WeatherIcon } from "@components/shared/WeatherIcon";
import { useStyles } from "./styles";

interface Props {
  city: string;
  date: Date;
  iconCode: string;
  iconAltDescription: string;
  celsiusDegreeTemperature: number;
  celsiusDegreeFeelTemperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  weatherDescription: string;
}

export const FlightWeatherCard: React.FC<Props> = ({
  city,
  date,
  iconAltDescription,
  iconCode,
  celsiusDegreeTemperature,
  celsiusDegreeFeelTemperature,
  humidity,
  pressure,
  windSpeed,
  weatherDescription,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container justify="center">
        <WeatherIcon iconCode={iconCode} altDescription={iconAltDescription} />
      </Grid>
      <Typography variant="h6" align="center">
        {weatherDescription}
      </Typography>
      <Typography variant="h5" align="center">
        {city}, {new Date(date).toLocaleDateString()},{" "}
        {new Date(date).toLocaleTimeString()}
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">
          Temperatura: {celsiusDegreeTemperature} °C
        </Typography>
        <Typography variant="subtitle1">
          Temperatura odczuwalna: {celsiusDegreeFeelTemperature} °C
        </Typography>
        <Typography variant="subtitle1">Wilgotność: {humidity} %</Typography>
        <Typography variant="subtitle1">Ciśnienie: {pressure} hPa</Typography>
        <Typography variant="subtitle1">
          Szybkość wiatru: {windSpeed} m/s
        </Typography>
      </Box>
    </Paper>
  );
};
