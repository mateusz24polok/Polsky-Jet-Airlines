import { createSlice } from "@reduxjs/toolkit";
import { Flight } from "@appTypes/flight";
import { RootState } from "@store/setupStore";

interface FlightsState {
  flights: Array<Flight>;
  isProgress: boolean;
  isError: boolean;
}

const initialState: FlightsState = {
  flights: [],
  isProgress: false,
  isError: false,
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    fetchFlights: (state: FlightsState) => {
      state.isProgress = true;
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

export const { fetchFlights } = flightsSlice.actions;

export const flightsReducer = flightsSlice.reducer;
