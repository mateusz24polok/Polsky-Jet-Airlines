import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
} from "@store/slices/user";
import { postFlightPurchaseService } from "@services/purchases";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";

function* addPurchaseSagaWorker(
  addPurchaseAction: ReturnType<typeof addPurchase>,
): Generator<void | CallEffect | PutEffect, void, FlightTicketPurchaseRequest> {
  try {
    const flightPurchase = yield call(
      postFlightPurchaseService,
      addPurchaseAction.payload.flight,
      addPurchaseAction.payload,
    );
    yield put(addPurchaseSuccess(flightPurchase));
  } catch (error) {
    yield put(addPurchaseError());
  }
}

export function* addPurchaseSaga() {
  yield takeLatest(addPurchase.type, addPurchaseSagaWorker);
}
