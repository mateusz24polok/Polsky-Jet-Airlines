import { all } from "redux-saga/effects";
import { flightsSaga } from "@store/sagas/flights";

export function* rootSaga() {
  yield all([flightsSaga()]);
}
