import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  registerNewUser,
  registerNewUserError,
  registerNewUserSuccess,
} from "@store/slices/auth";
import { postRegisterNewUserService } from "@services/auth";

function* registerNewUserSagaWorker(
  registerNewUserAction: ReturnType<typeof registerNewUser>,
): Generator<CallEffect | PutEffect, void, void> {
  try {
    yield call(postRegisterNewUserService, registerNewUserAction.payload);
    yield put(registerNewUserSuccess());
  } catch (error) {
    yield put(registerNewUserError());
  }
}

export function* registerNewUserSaga() {
  yield takeLatest(registerNewUser.type, registerNewUserSagaWorker);
}
