import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "@store/sagas/rootSaga";
import { flightsReducer } from "@store/slices/flights";
import { airportsReducer } from "@store/slices/airports";
import { currenciesReducer } from "@store/slices/currencies";
import { userReducer } from "@store/slices/user";
import { authReducer } from "@store/slices/auth";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    airports: airportsReducer,
    currencies: currenciesReducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
