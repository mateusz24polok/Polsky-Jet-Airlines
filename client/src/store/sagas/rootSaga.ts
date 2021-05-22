import { all } from "redux-saga/effects";
import { flightsSaga } from "@store/sagas/flights";
import { airportsSaga } from "@store/sagas/airports";

export function* rootSaga() {
  yield all([flightsSaga(), airportsSaga()]);
}
