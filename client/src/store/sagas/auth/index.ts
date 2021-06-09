import {
  CallEffect,
  PutEffect,
  SelectEffect,
  call,
  put,
  select,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  registerNewUser,
  registerNewUserError,
  registerNewUserSuccess,
  selectLastAuthActivityMessage,
  userLogin,
  userLoginError,
  userLoginSuccess,
} from "@store/slices/auth";
import { updateUserDetails } from "@store/slices/user";
import { addSnackbar } from "@store/slices/app";
import {
  postLoginUserService,
  postRegisterNewUserService,
} from "@services/auth";
import { setJwtInLocalStorage } from "@utils/authUtils";
import { UserSignupAndLoginResponse } from "@appTypes/user";
import { ApiResponseError } from "@appTypes/shared/ajax";

function* registerNewUserSagaWorker(
  registerNewUserAction: ReturnType<typeof registerNewUser>,
): Generator<CallEffect | PutEffect | SelectEffect, void, string> {
  try {
    yield call(postRegisterNewUserService, registerNewUserAction.payload);
    yield put(registerNewUserSuccess());
    const lastAuthActivityMessage = yield select(selectLastAuthActivityMessage);
    yield put(
      addSnackbar({
        message: lastAuthActivityMessage,
        options: { variant: "success" },
      }),
    );
  } catch (error) {
    yield put(registerNewUserError());
    const lastAuthActivityMessage = yield select(selectLastAuthActivityMessage);
    yield put(
      addSnackbar({
        message: lastAuthActivityMessage,
        options: { variant: "error" },
      }),
    );
  }
}

function* loginUserSagaWorker(
  loginUserAction: ReturnType<typeof userLogin>,
): Generator<
  CallEffect | PutEffect | SelectEffect | void,
  void,
  UserSignupAndLoginResponse
> {
  try {
    const userData = yield call(postLoginUserService, loginUserAction.payload);
    yield put(userLoginSuccess());
    yield put(updateUserDetails(userData));
    const lastAuthActivityMessage = yield select(selectLastAuthActivityMessage);
    yield put(
      addSnackbar({
        message: lastAuthActivityMessage,
        options: { variant: "success" },
      }),
    );
    yield setJwtInLocalStorage(userData.token);
  } catch (error) {
    yield put(userLoginError((error as ApiResponseError).message));
    const lastAuthActivityMessage = yield select(selectLastAuthActivityMessage);
    yield put(
      addSnackbar({
        message: lastAuthActivityMessage,
        options: { variant: "error" },
      }),
    );
  }
}

export function* registerNewUserSaga() {
  yield takeLatest(registerNewUser.type, registerNewUserSagaWorker);
}

export function* loginUserSaga() {
  yield takeLatest(userLogin.type, loginUserSagaWorker);
}
