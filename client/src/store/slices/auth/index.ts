import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { LoginFormAndRequest, SignupRequest } from "@appTypes/user";

interface AuthState {
  isLoginPopupShown: boolean;
  isSignupPopupShown: boolean;
  isProgress: boolean;
  isError: boolean;
  lastActivityMessage: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoginPopupShown: false,
  isSignupPopupShown: false,
  isError: false,
  isProgress: false,
  lastActivityMessage: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    showLoginPopup: (state: AuthState) => {
      state.isLoginPopupShown = true;
    },
    hideLoginPopup: (state: AuthState) => {
      state.isLoginPopupShown = false;
    },
    showSignupPopup: (state: AuthState) => {
      state.isSignupPopupShown = true;
    },
    hideSignupPopup: (state: AuthState) => {
      state.isSignupPopupShown = false;
    },
    registerNewUser: (
      state: AuthState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<SignupRequest>,
    ) => {
      state.isProgress = true;
      state.isError = false;
      state.lastActivityMessage = "Rejestracja nowego użytkownika";
    },
    registerNewUserSuccess: (state: AuthState) => {
      state.isProgress = false;
      state.isError = false;
      state.lastActivityMessage = "Pomyślnie zarejestrowano użytkownika";
    },
    registerNewUserError: (state: AuthState) => {
      state.isProgress = false;
      state.isError = true;
      state.lastActivityMessage =
        "Podczas rejestracji nowego użytkownika wystąpił błąd";
    },
    userLogin: (
      state: AuthState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<LoginFormAndRequest>,
    ) => {
      state.isProgress = true;
      state.isError = false;
      state.lastActivityMessage = "Logowanie...";
    },
    userLoginSuccess: (state: AuthState) => {
      state.isProgress = false;
      state.isError = false;
      state.lastActivityMessage = "Zalogowano poprawnie";
    },
    userLoginError: (state: AuthState) => {
      state.isProgress = false;
      state.isError = true;
      state.lastActivityMessage = "Błąd logowania";
    },
  },
});

export const selectAuthState = (state: RootState) => state.auth;
export const selectIsLoginPopupShown = (state: RootState) =>
  selectAuthState(state).isLoginPopupShown;
export const selectIsSignupPopupShown = (state: RootState) =>
  selectAuthState(state).isSignupPopupShown;
export const selectIsLoggedIn = (state: RootState) =>
  selectAuthState(state).isLoggedIn;
export const selectLastAuthActivityMessage = (state: RootState) =>
  selectAuthState(state).lastActivityMessage;

export const {
  hideLoginPopup,
  hideSignupPopup,
  showLoginPopup,
  showSignupPopup,
  registerNewUser,
  registerNewUserError,
  registerNewUserSuccess,
  userLogin,
  userLoginError,
  userLoginSuccess,
} = authSlice.actions;

export const authReducer = authSlice.reducer;