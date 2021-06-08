import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";
import { UserRole, UserSignupAndLoginResponse } from "@appTypes/user";

interface UserState {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  jwtToken: string;
  purchases: FlightTicketPurchaseRequest | null;
  isProgress: boolean;
  isError: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  jwtToken: "",
  role: UserRole.USER,
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
    getUserDetails: (
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
  },
});

export const selectUserState = (state: RootState) => state.user;

export const {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
  getUserDetails,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
