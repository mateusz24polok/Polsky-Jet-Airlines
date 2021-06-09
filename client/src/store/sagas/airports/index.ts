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
import { addSnackbar } from "@store/slices/app";
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
): Generator<void | CallEffect | PutEffect, void> {
  try {
    yield call<any>(postAirportService, createAirportsAction?.payload);
    yield put(createAirportsSuccess());
    yield put(
      addSnackbar({
        message: "Pomyślnie dodano nowe lotnisko",
        options: { variant: "success" },
      }),
    );
  } catch (error) {
    yield put(createAirportsError());
    yield put(
      addSnackbar({
        message: "Błąd podczas dodawania lotniska",
        options: { variant: "error" },
      }),
    );
  }
}

export function* fetchAirportsSaga() {
  yield takeLatest(fetchAirports.type, fetchAirportsSagaWorker);
}

export function* createAirportsSaga() {
  yield takeLatest(createAirports.type, createAirportsSagaWorker);
}
