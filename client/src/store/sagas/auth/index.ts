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
  userLogin,
  userLoginError,
  userLoginSuccess,
} from "@store/slices/auth";
import { updateUserDetails } from "@store/slices/user";
import {
  postLoginUserService,
  postRegisterNewUserService,
} from "@services/auth";
import { setJwtInLocalStorage } from "@utils/authUtils";
import { UserSignupAndLoginResponse } from "@appTypes/user";
import { ApiResponseError } from "@appTypes/shared/ajax";

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

function* loginUserSagaWorker(
  loginUserAction: ReturnType<typeof userLogin>,
): Generator<CallEffect | PutEffect | void, void, UserSignupAndLoginResponse> {
  try {
    const userData = yield call(postLoginUserService, loginUserAction.payload);
    yield put(userLoginSuccess());
    yield put(updateUserDetails(userData));
    yield setJwtInLocalStorage(userData.token);
  } catch (error) {
    yield put(userLoginError((error as ApiResponseError).message));
  }
}

export function* registerNewUserSaga() {
  yield takeLatest(registerNewUser.type, registerNewUserSagaWorker);
}

export function* loginUserSaga() {
  yield takeLatest(userLogin.type, loginUserSagaWorker);
}
