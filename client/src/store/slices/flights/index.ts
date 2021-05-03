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

export const {
  fetchFlights,
  fetchFlightsSuccess,
  fetchFlightsError,
} = flightsSlice.actions;

export const flightsReducer = flightsSlice.reducer;
