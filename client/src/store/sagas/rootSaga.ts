import { all } from "redux-saga/effects";
import {
  createFlightSaga,
  fetchFlightWeatherSaga,
  fetchFlightsSaga,
} from "@store/sagas/flights";
import { createAirportsSaga, fetchAirportsSaga } from "@store/sagas/airports";
import { fetchCurrenciesSaga } from "@store/sagas/currencies";
import { addPurchaseSaga } from "@store/sagas/purchases";
import {
  loginUserSaga,
  logoutUserSaga,
  registerNewUserSaga,
  updateUserDetailsSaga,
} from "@store/sagas/auth";

export function* rootSaga() {
  yield all([
    fetchFlightsSaga(),
    createFlightSaga(),
    fetchFlightWeatherSaga(),
    fetchAirportsSaga(),
    createAirportsSaga(),
    fetchCurrenciesSaga(),
    addPurchaseSaga(),
    registerNewUserSaga(),
    loginUserSaga(),
    logoutUserSaga(),
    updateUserDetailsSaga(),
  ]);
}
