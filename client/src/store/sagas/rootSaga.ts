import { all } from "redux-saga/effects";
import { flightsSaga } from "@store/sagas/flights";
import { createAirportsSaga, fetchAirportsSaga } from "@store/sagas/airports";

export function* rootSaga() {
  yield all([flightsSaga(), fetchAirportsSaga(), createAirportsSaga()]);
}
