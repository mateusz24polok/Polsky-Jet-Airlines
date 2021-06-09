import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { Snackbar } from "@appTypes/shared/snackbar";
import { SnackbarKey } from "notistack";

interface AppState {
  snackbarNotifications: Snackbar[];
}

const initialState: AppState = {
  snackbarNotifications: [],
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    addSnackbar: (state: AppState, action: PayloadAction<Snackbar>) => {
      const key = action.payload.options && action.payload.options.key;
      state.snackbarNotifications.push({
        ...action.payload,
        key: key || new Date().getTime() + Math.random(),
      });
    },
    removeSnackbar: (state: AppState, action: PayloadAction<SnackbarKey>) => {
      state.snackbarNotifications = state.snackbarNotifications.filter(
        snackbarNotification => snackbarNotification.key !== action.payload,
      );
    },
  },
});

export const selectAppState = (state: RootState) => state.app;

export const selectSnackbarNotifications = (state: RootState) =>
  selectAppState(state).snackbarNotifications;

export const { addSnackbar, removeSnackbar } = appSlice.actions;

export const appReducer = appSlice.reducer;
