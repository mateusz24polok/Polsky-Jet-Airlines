import { all } from "redux-saga/effects";
import { createFlightSaga, fetchFlightsSaga } from "@store/sagas/flights";
import { createAirportsSaga, fetchAirportsSaga } from "@store/sagas/airports";

export function* rootSaga() {
  yield all([
    fetchFlightsSaga(),
    createFlightSaga(),
    fetchAirportsSaga(),
    createAirportsSaga(),
  ]);
}
