import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "@store/sagas/rootSaga";
import { flightsReducer } from "@store/slices/flights";
import { airportsReducer } from "@store/slices/airports";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    airports: airportsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
