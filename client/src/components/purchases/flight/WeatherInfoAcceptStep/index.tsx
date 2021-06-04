import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomCheckbox } from "@components/shared/CustomCheckbox";
import {
  fetchFlightWeather,
  fetchFlights,
  selectFlights,
} from "@store/slices/flights";

export const WeatherInfoAcceptStep: React.FC = () => {
  const dispatch = useDispatch();
  const flights = useSelector(selectFlights);

  useEffect(() => {
    if (flights.length === 0) {
      dispatch(fetchFlights());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (flights.length) {
      dispatch(fetchFlightWeather("60b39441d056564ab4e354e7"));
    }
  }, [flights.length, dispatch]);

  return (
    <>
      <h1>First Step - Weather Accept</h1>
      <h2>Please accept the weather on the following checkbox</h2>
      <h3>
        Here will be content of weather accept component in the near future
      </h3>
      <CustomCheckbox
        // className={classes.checkbox}
        name="weatherInfoAccept"
        label="Zaakceptuj warunki pogodowe"
      />
    </>
  );
};
