import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";
import { UserRole, UserSignupAndLoginResponse } from "@appTypes/user";

interface UserState {
  id: string | null;
  name: string | null;
  role: UserRole | null;
  email: string | null;
  jwtToken: string | null;
  purchases: FlightTicketPurchaseRequest | null;
  isProgress: boolean;
  isError: boolean;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  jwtToken: null,
  role: UserRole.NONE,
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
    updateUserDetails: (
      state: UserState,
      action: PayloadAction<UserSignupAndLoginResponse>,
    ) => {
      if (action.payload.status === "success") {
        const { token, user } = action.payload;
        state.email = user.email;
        state.id = user._id;
        state.name = user.name;
        state.role = user.role;
        state.jwtToken = token;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearUserDetails: (state: UserState) => initialState,
  },
});

export const selectUserState = (state: RootState) => state.user;
export const selectUserRole = (state: RootState) => selectUserState(state).role;

export const {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
  updateUserDetails,
  clearUserDetails,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
