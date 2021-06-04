import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CreateFlightRequest,
  Flight,
  FlightServiceResponse,
  FlightsSearchFilters,
} from "@appTypes/flight";
import { FlightCitiesWeatherResponseWithFlightId } from "@appTypes/weather";
import { RootState } from "@store/setupStore";

interface FlightsState {
  flights: Array<Flight>;
  flightsCount: number;
  isProgress: boolean;
  isError: boolean;
}

const initialState: FlightsState = {
  flights: [],
  flightsCount: 0,
  isProgress: false,
  isError: false,
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    fetchFlights: (
      state: FlightsState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FlightsSearchFilters | undefined>,
    ) => {
      state.isProgress = true;
      state.isError = false;
    },
    fetchFlightsSuccess: (
      state: FlightsState,
      action: PayloadAction<FlightServiceResponse>,
    ) => {
      state.isProgress = false;
      state.isError = false;
      state.flightsCount = action.payload.flightsCount;
      state.flights = action.payload.data;
    },
    fetchFlightsError: (state: FlightsState) => {
      state.isProgress = false;
      state.isError = true;
    },
    createFlight: (
      state: FlightsState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<CreateFlightRequest>,
    ) => {
      state.isProgress = true;
      state.isError = false;
    },
    createFlightSuccess: (state: FlightsState) => {
      state.isProgress = false;
      state.isError = false;
    },
    createFlightError: (state: FlightsState) => {
      state.isProgress = false;
      state.isError = true;
    },
    fetchFlightWeather: (
      state: FlightsState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<string>,
    ) => {
      state.isProgress = true;
      state.isError = false;
    },
    fetchFlightWeatherSuccess: (
      state: FlightsState,
      action: PayloadAction<FlightCitiesWeatherResponseWithFlightId>,
    ) => {
      const flightIndex = state.flights.findIndex(
        flight => flight._id === action.payload.id,
      );
      state.flights[flightIndex].weather = {
        destinationCityWeather: action.payload.destinationCityWeather,
        startingCityWeather: action.payload.startingCityWeather,
      };
    },
    fetchFlightWeatherError: (state: FlightsState) => {
      state.isProgress = false;
      state.isError = true;
    },
  },
});

export const selectFlightsState = (state: RootState) => state.flights;

export const selectFlights = (state: RootState) =>
  selectFlightsState(state).flights;

export const selectIsProgress = (state: RootState) =>
  selectFlightsState(state).isProgress;

export const selectIsError = (state: RootState) =>
  selectFlightsState(state).isError;

export const selectStartingAirports = (state: RootState) =>
  selectFlights(state).map(flight => flight.startingAirport);

export const selectStartingAirportCities = (state: RootState) => {
  const startingAirports = selectFlights(state).map(
    flight => flight.startingAirport,
  );
  const startingAirportsCities = startingAirports.map(airport => airport.city);
  const uniqueStartingCities = new Set(startingAirportsCities);
  return Array.from(uniqueStartingCities);
};

export const selectDestinationAirports = (state: RootState) =>
  selectFlights(state).map(flight => flight.destinationAirport);

export const selectDestinationAirportCities = (state: RootState) => {
  const destinationAirports = selectFlights(state).map(
    flight => flight.destinationAirport,
  );
  const destinationAirportsCities = destinationAirports.map(
    airport => airport.city,
  );
  const uniqueDestinationCities = new Set(destinationAirportsCities);
  return Array.from(uniqueDestinationCities);
};

export const selectFlightsFromChosenCity = (state: RootState, city: string) =>
  selectFlights(state).filter(flight => flight.startingCity === city);

export const selectFlightsToChosenCity = (state: RootState, city: string) =>
  selectFlightsState(state).flights.filter(
    flight => flight.destinationCity === city,
  );

export const selectFlightById = (state: RootState, flightId: string) => {
  return selectFlightsState(state).flights.find(
    flight => flight._id === flightId,
  );
};

export const {
  fetchFlights,
  fetchFlightsSuccess,
  fetchFlightsError,
  createFlight,
  createFlightSuccess,
  createFlightError,
  fetchFlightWeather,
  fetchFlightWeatherSuccess,
  fetchFlightWeatherError,
} = flightsSlice.actions;

export const flightsReducer = flightsSlice.reducer;
