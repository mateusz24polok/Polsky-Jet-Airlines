import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchFlights,
  fetchFlightsError,
  fetchFlightsSuccess,
} from "@store/slices/flights";
import { getFlightsService } from "@services/flights";
import { FlightServiceResponse } from "@appTypes/flight";

function* flightsSagaWorker(): Generator<
  | void
  | CallEffect<FlightServiceResponse>
  | PutEffect<{
      payload: FlightServiceResponse;
      type: string;
    }>
  | PutEffect<{ payload: undefined; type: string }>,
  void,
  FlightServiceResponse
> {
  try {
    yield console.log("You're now in Saga");
    const flightsResponse: FlightServiceResponse = yield call(
      getFlightsService,
    );
    yield put(fetchFlightsSuccess(flightsResponse));
    yield console.log(flightsResponse);
  } catch (error) {
    yield put(fetchFlightsError());
  }
}

export function* flightsSaga() {
  yield takeLatest(fetchFlights.type, flightsSagaWorker);
}
