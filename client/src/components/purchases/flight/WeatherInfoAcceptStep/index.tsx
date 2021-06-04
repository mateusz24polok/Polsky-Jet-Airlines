import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import { CustomCheckbox } from "@components/shared/CustomCheckbox";
import { FlightWeatherCard } from "@components/shared/FlightWeatherCard";
import {
  fetchFlightWeather,
  fetchFlights,
  selectFlightById,
  selectFlights,
  selectIsProgress,
} from "@store/slices/flights";
import { RootState } from "@store/setupStore";
import { getCelsiusTemperature } from "@utils/weatherUtils";
import { getNextDateAfterTimeElapsed } from "@utils/dateUtils";
import { useStyles } from "./styles";

interface Props {
  flightId: string;
}

export const WeatherInfoAcceptStep: React.FC<Props> = ({ flightId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isProgress = useSelector(selectIsProgress);
  const flights = useSelector(selectFlights);
  const purchasedFlight = useSelector((state: RootState) =>
    selectFlightById(state, flightId),
  );

  useEffect(() => {
    if (flights.length === 0) {
      dispatch(fetchFlights());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (flights.length) {
      dispatch(fetchFlightWeather(flightId));
    }
  }, [flights.length, flightId, dispatch]);

  if (purchasedFlight && purchasedFlight.weather) {
    const {
      destinationCity,
      estimatedFlightTime,
      startingCity,
      startingDate,
      weather,
    } = purchasedFlight;
    const { startingCityWeather, destinationCityWeather } = weather;
    return (
      <>
        <Grid container justify="space-around" spacing={2}>
          <Grid item>
            <Typography
              className={classes.cardTitle}
              variant="h5"
              align="center"
            >
              Wylot
            </Typography>
            <FlightWeatherCard
              city={startingCity}
              date={startingDate}
              iconCode={startingCityWeather.weather[0].icon}
              iconAltDescription={startingCityWeather.weather[0].description}
              weatherDescription={startingCityWeather.weather[0].description}
              celsiusDegreeFeelTemperature={getCelsiusTemperature(
                startingCityWeather.main.feels_like,
              )}
              celsiusDegreeTemperature={getCelsiusTemperature(
                startingCityWeather.main.temp,
              )}
              humidity={startingCityWeather.main.humidity}
              pressure={startingCityWeather.main.pressure}
              windSpeed={startingCityWeather.wind.speed}
            />
          </Grid>
          <Grid item>
            <Typography
              className={classes.cardTitle}
              variant="h5"
              align="center"
            >
              Przylot
            </Typography>
            <FlightWeatherCard
              city={destinationCity}
              date={getNextDateAfterTimeElapsed(
                startingDate,
                estimatedFlightTime,
              )}
              iconCode={destinationCityWeather.weather[0].icon}
              iconAltDescription={destinationCityWeather.weather[0].description}
              weatherDescription={destinationCityWeather.weather[0].description}
              celsiusDegreeFeelTemperature={getCelsiusTemperature(
                destinationCityWeather.main.feels_like,
              )}
              celsiusDegreeTemperature={getCelsiusTemperature(
                destinationCityWeather.main.temp,
              )}
              humidity={destinationCityWeather.main.humidity}
              pressure={destinationCityWeather.main.pressure}
              windSpeed={destinationCityWeather.wind.speed}
            />
          </Grid>
        </Grid>
        <Box className={classes.checkbox}>
          <CustomCheckbox
            name="weatherInfoAccept"
            label="Zaakceptuj warunki pogodowe"
          />
        </Box>
      </>
    );
  } else {
    return (
      <>
        {isProgress ? (
          <Grid container justify="center" alignItems="center">
            <CircularProgress className={classes.circular} size={72} />
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            Brak danych pogodowych
          </Typography>
        )}
      </>
    );
  }
};
