import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  createAirports,
  createAirportsError,
  createAirportsSuccess,
  fetchAirports,
  fetchAirportsError,
  fetchAirportsSuccess,
} from "@store/slices/airports";
import { getAirportService, postAirportService } from "@services/airports";
import { AirportServiceResponse } from "@appTypes/airport";

function* fetchAirportsSagaWorker(): Generator<
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

function* createAirportsSagaWorker(
  createAirportsAction: ReturnType<typeof createAirports>,
): Generator<
  void | CallEffect | PutEffect<{ payload: undefined; type: string }>,
  void
> {
  try {
    yield call<any>(postAirportService, createAirportsAction?.payload);
    yield put(createAirportsSuccess());
  } catch (error) {
    yield put(createAirportsError());
  }
}

export function* fetchAirportsSaga() {
  yield takeLatest(fetchAirports.type, fetchAirportsSagaWorker);
}

export function* createAirportsSaga() {
  yield takeLatest(createAirports.type, createAirportsSagaWorker);
}
