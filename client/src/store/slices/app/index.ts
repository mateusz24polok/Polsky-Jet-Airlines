import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";

interface AppState {
  isLoginPopupShown: boolean;
  isSignupPopupShown: boolean;
  isProgress: boolean;
  isError: boolean;
}

const initialState: AppState = {
  isLoginPopupShown: false,
  isSignupPopupShown: false,
  isError: false,
  isProgress: false,
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    showLoginPopup: (state: AppState) => {
      state.isLoginPopupShown = true;
    },
    hideLoginPopup: (state: AppState) => {
      state.isLoginPopupShown = false;
    },
    showSignupPopup: (state: AppState) => {
      state.isSignupPopupShown = true;
    },
    hideSignupPopup: (state: AppState) => {
      state.isSignupPopupShown = false;
    },
  },
});

export const selectAppState = (state: RootState) => state.app;
export const selectIsLoginPopupShown = (state: RootState) =>
  selectAppState(state).isLoginPopupShown;
export const selectIsSignupPopupShown = (state: RootState) =>
  selectAppState(state).isSignupPopupShown;

export const {
  hideLoginPopup,
  hideSignupPopup,
  showLoginPopup,
  showSignupPopup,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
