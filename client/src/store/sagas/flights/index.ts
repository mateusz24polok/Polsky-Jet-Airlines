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
import { FlightServiceResponse, FlightsSearchFilters } from "@appTypes/flight";

function* flightsSagaWorker(
  fetchFlightAction: ReturnType<typeof fetchFlights>,
): Generator<
  | void
  | CallEffect<FlightServiceResponse | FlightsSearchFilters>
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

export function* flightsSaga() {
  yield takeLatest(fetchFlights.type, flightsSagaWorker);
}
