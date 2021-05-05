import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Flight, FlightServiceResponse } from "@appTypes/flight";
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
    fetchFlights: (state: FlightsState) => {
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

export const {
  fetchFlights,
  fetchFlightsSuccess,
  fetchFlightsError,
} = flightsSlice.actions;

export const flightsReducer = flightsSlice.reducer;
