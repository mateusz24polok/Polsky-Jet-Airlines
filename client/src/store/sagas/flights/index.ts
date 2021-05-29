import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  createFlight,
  createFlightError,
  createFlightSuccess,
  fetchFlights,
  fetchFlightsError,
  fetchFlightsSuccess,
} from "@store/slices/flights";
import { getFlightsService, postFlightService } from "@services/flights";
import { FlightServiceResponse } from "@appTypes/flight";

function* fetchFlightsSagaWorker(
  fetchFlightAction: ReturnType<typeof fetchFlights>,
): Generator<
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
    const flightsResponse: FlightServiceResponse = yield call(
      getFlightsService,
      fetchFlightAction?.payload,
    );
    yield put(fetchFlightsSuccess(flightsResponse));
  } catch (error) {
    yield put(fetchFlightsError());
  }
}

function* createFlightSagaWorker(
  createFlightAction: ReturnType<typeof createFlight>,
): Generator<
  void | CallEffect | PutEffect<{ payload: undefined; type: string }>,
  void
> {
  try {
    yield call<any>(postFlightService, createFlightAction?.payload);
    yield put(createFlightSuccess());
  } catch (error) {
    yield put(createFlightError());
  }
}

export function* fetchFlightsSaga() {
  yield takeLatest(fetchFlights.type, fetchFlightsSagaWorker);
}

export function* createFlightSaga() {
  yield takeLatest(createFlight.type, createFlightSagaWorker);
}
