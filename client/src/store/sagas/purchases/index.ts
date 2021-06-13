import {
  CallEffect,
  PutEffect,
  call,
  put,
  select,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
  fetchUserDetails,
  selectUserId,
} from "@store/slices/user";
import { postFlightPurchaseService } from "@services/purchases";
import { SelectEffect } from "redux-saga/effects";

function* addPurchaseSagaWorker(
  addPurchaseAction: ReturnType<typeof addPurchase>,
): Generator<void | CallEffect | PutEffect | SelectEffect, void, string> {
  try {
    yield call(
      postFlightPurchaseService,
      addPurchaseAction.payload.flight,
      addPurchaseAction.payload,
    );
    const userId = yield select(selectUserId);
    yield put(fetchUserDetails(userId));
    yield put(addPurchaseSuccess());
  } catch (error) {
    yield put(addPurchaseError());
  }
}

export function* addPurchaseSaga() {
  yield takeLatest(addPurchase.type, addPurchaseSagaWorker);
}
