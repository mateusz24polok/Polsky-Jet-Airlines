import {
  CallEffect,
  PutEffect,
  SelectEffect,
  call,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  createFlight,
  createFlightError,
  createFlightSuccess,
  fetchFlightWeather,
  fetchFlightWeatherError,
  fetchFlightWeatherSuccess,
  fetchFlights,
  fetchFlightsError,
  fetchFlightsSuccess,
  selectFlightById,
} from "@store/slices/flights";
import { addSnackbar } from "@store/slices/app";
import { getFlightsService, postFlightService } from "@services/flights";
import { getFlightCitiesWeather } from "@services/weather";
import { Flight, FlightServiceResponse } from "@appTypes/flight";
import { FlightCitiesWeatherResponse } from "@appTypes/weather";

function* fetchFlightsSagaWorker(
  fetchFlightAction: ReturnType<typeof fetchFlights>,
): Generator<
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
    const flightsResponse = yield call(
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
): Generator<CallEffect | PutEffect, void, void> {
  try {
    yield call<any>(postFlightService, createFlightAction?.payload);
    yield put(createFlightSuccess());
    yield put(
      addSnackbar({
        message: "Pomyślnie dodano nowy lot",
        options: { variant: "success" },
      }),
    );
  } catch (error) {
    yield put(createFlightError());
    yield put(
      addSnackbar({
        message: "Błąd podczas dodawania lotu",
        options: { variant: "success" },
      }),
    );
  }
}

function* fetchFlightWeatherSagaWorker(
  fetchFlightWeatherAction: ReturnType<typeof fetchFlightWeather>,
): Generator<
  SelectEffect | CallEffect | PutEffect,
  void,
  Flight | FlightCitiesWeatherResponse
> {
  try {
    const flightId = fetchFlightWeatherAction.payload;
    const flight = yield select(selectFlightById, flightId);

    const flightCitiesWeather = yield call<any>(
      getFlightCitiesWeather,
      (flight as Flight).startingCity,
      (flight as Flight).destinationCity,
    );
    yield put(
      fetchFlightWeatherSuccess({
        ...(flightCitiesWeather as FlightCitiesWeatherResponse),
        id: flightId,
      }),
    );
  } catch (error) {
    yield put(fetchFlightWeatherError());
  }
}

export function* fetchFlightsSaga() {
  yield takeLatest(fetchFlights.type, fetchFlightsSagaWorker);
}

export function* createFlightSaga() {
  yield takeLatest(createFlight.type, createFlightSagaWorker);
}

export function* fetchFlightWeatherSaga() {
  yield takeLatest(fetchFlightWeather.type, fetchFlightWeatherSagaWorker);
}
