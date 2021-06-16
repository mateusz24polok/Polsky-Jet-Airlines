import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { getJwtFromLocalStorage, getTokenValidity } from "@utils/authUtils";
import { LoginFormAndRequest, SignupRequest } from "@appTypes/user";

const jwt = getJwtFromLocalStorage();

interface AuthState {
  isLoginPopupShown: boolean;
  isSignupPopupShown: boolean;
  isProgress: boolean;
  isError: boolean;
  lastActivityMessage: string;
  errorMessage: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoginPopupShown: false,
  isSignupPopupShown: false,
  isError: false,
  isProgress: false,
  lastActivityMessage: "",
  errorMessage: "",
  isLoggedIn: getTokenValidity(jwt),
};

const authSlice = createSlice({
  initialState,
  name: "auth",
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
      state.isLoggedIn = true;
      state.lastActivityMessage = "Zalogowano poprawnie";
    },
    userLoginError: (
      state: AuthState,
      action: PayloadAction<string | undefined>,
    ) => {
      state.isProgress = false;
      state.isError = true;
      state.lastActivityMessage = "Błąd logowania";
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    },
    userLogout: (state: AuthState) => {
      state.isProgress = true;
      state.isError = false;
      state.lastActivityMessage = "Wylogowywanie...";
    },
    userLogoutSuccess: (state: AuthState) => {
      state.isProgress = false;
      state.isError = false;
      state.isLoggedIn = false;
      state.lastActivityMessage = "Wylogowano pomyślnie";
    },
    userLogoutError: (state: AuthState) => {
      state.isProgress = false;
      state.isError = true;
      state.lastActivityMessage = "Nieudana próba wylogowania";
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
  userLogout,
  userLogoutError,
  userLogoutSuccess,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
