import { configureStore } from "@reduxjs/toolkit";
import { flightsReducer } from "@store/slices/flights";

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
