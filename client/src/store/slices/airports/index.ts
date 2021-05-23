import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Airport,
  AirportServiceResponse,
  CreateAirportRequest,
} from "@appTypes/airport";
import { RootState } from "@store/setupStore";

interface AirportsState {
  airports: Array<Airport>;
  isProgress: boolean;
  isError: boolean;
}

const initialState: AirportsState = {
  airports: [],
  isProgress: false,
  isError: false,
};

export const airportsSlice = createSlice({
  name: "airports",
  initialState,
  reducers: {
    fetchAirports: (state: AirportsState) => {
      state.isProgress = true;
      state.isError = false;
    },
    fetchAirportsSuccess: (
      state: AirportsState,
      action: PayloadAction<AirportServiceResponse>,
    ) => {
      state.isProgress = false;
      state.isError = false;
      state.airports = action.payload.data;
    },
    fetchAirportsError: (state: AirportsState) => {
      state.isProgress = false;
      state.isError = true;
    },
    createAirports: (
      state: AirportsState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<CreateAirportRequest>,
    ) => {
      state.isProgress = true;
      state.isError = false;
    },
    createAirportsSuccess: (state: AirportsState) => {
      state.isProgress = false;
      state.isError = false;
    },
    createAirportsError: (state: AirportsState) => {
      state.isProgress = false;
      state.isError = true;
    },
  },
});

export const selectAirportsState = (state: RootState) => state.airports;

export const selectAirports = (state: RootState) =>
  selectAirportsState(state).airports;

export const selectIsProgress = (state: RootState) =>
  selectAirportsState(state).isProgress;

export const selectIsError = (state: RootState) =>
  selectAirportsState(state).isError;

export const {
  fetchAirports,
  fetchAirportsSuccess,
  fetchAirportsError,
  createAirports,
  createAirportsError,
  createAirportsSuccess,
} = airportsSlice.actions;

export const airportsReducer = airportsSlice.reducer;
