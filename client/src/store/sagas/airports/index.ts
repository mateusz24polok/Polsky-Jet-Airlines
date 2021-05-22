import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchAirports,
  fetchAirportsError,
  fetchAirportsSuccess,
} from "@store/slices/airports";
import { getAirportService } from "@services/airports";
import { AirportServiceResponse } from "@appTypes/airport";

function* airportsSagaWorker(): Generator<
  | void
  | CallEffect
  | PutEffect<{
      payload: AirportServiceResponse;
      type: string;
    }>
  | PutEffect<{ payload: undefined; type: string }>,
  void,
  AirportServiceResponse
> {
  try {
    const airportsResponse: AirportServiceResponse = yield call(
      getAirportService,
    );
    yield put(fetchAirportsSuccess(airportsResponse));
  } catch (error) {
    yield put(fetchAirportsError());
  }
}

export function* airportsSaga() {
  yield takeLatest(fetchAirports.type, airportsSagaWorker);
}
