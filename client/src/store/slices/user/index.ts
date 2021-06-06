import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";

interface UserState {
  id: string;
  name: string;
  role: string;
  purchases: FlightTicketPurchaseRequest | null;
  isProgress: boolean;
  isError: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  role: "USER",
  purchases: null,
  isError: false,
  isProgress: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    addPurchase: (
      state: UserState,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FlightTicketPurchaseRequest>,
    ) => {
      state.isProgress = true;
      state.isError = false;
    },
    addPurchaseSuccess: (
      state: UserState,
      action: PayloadAction<FlightTicketPurchaseRequest>,
    ) => {
      state.isProgress = false;
      state.isError = false;
      if (action.payload) {
        state.purchases = action.payload;
      }
    },
    addPurchaseError: (state: UserState) => {
      state.isProgress = false;
      state.isError = true;
    },
  },
});

export const selectUserState = (state: RootState) => state.user;

export const {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
