import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import {
  getJwtFromLocalStorage,
  getTokenValidity,
  getUserFromLocalStorage,
  getUserIdFromJwt,
} from "@utils/authUtils";
import { FlightTicketPurchaseRequest, IPurchase } from "@appTypes/purchases";
import {
  UserRole,
  UserServiceResponse,
  UserSignupAndLoginResponse,
} from "@appTypes/user";

const jwt = getJwtFromLocalStorage();
const user = getUserFromLocalStorage(jwt);

interface UserState {
  id: string | null;
  name: string | null;
  role: UserRole | null;
  email: string | null;
  jwtToken: string | null;
  purchases: IPurchase[] | null;
  isProgress: boolean;
  isError: boolean;
}

const initialState: UserState = {
  id: getTokenValidity(jwt) ? getUserIdFromJwt(jwt) : null,
  name: user?.name ?? null,
  email: user?.email ?? null,
  jwtToken: jwt || null,
  role: user?.role ?? UserRole.NONE,
  purchases: user?.purchases ?? null,
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
    addPurchaseSuccess: (state: UserState) => {
      state.isProgress = false;
      state.isError = false;
    },
    addPurchaseError: (state: UserState) => {
      state.isProgress = false;
      state.isError = true;
    },
    setUserDetailsAfterLogin: (
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
    fetchUserDetails: (state: UserState, action: PayloadAction<string>) => {
      state.isProgress = true;
      state.isError = false;
    },
    fetchUserDetailsSuccess: (
      state: UserState,
      action: PayloadAction<UserServiceResponse>,
    ) => {
      if (action.payload) {
        const { data } = action.payload;
        const { _id, email, name, purchases, role } = data;
        state.id = _id;
        state.email = email;
        state.name = name;
        state.purchases = purchases;
        state.role = role;
      }
    },
    fetchUserDetailsError: (state: UserState) => {
      state.isProgress = false;
      state.isError = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearUserDetails: (state: UserState) => initialState,
  },
});

export const selectUserState = (state: RootState) => state.user;
export const selectUserRole = (state: RootState) => selectUserState(state).role;
export const selectUserId = (state: RootState) => selectUserState(state).id;

export const {
  addPurchase,
  addPurchaseError,
  addPurchaseSuccess,
  setUserDetailsAfterLogin,
  fetchUserDetails,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  clearUserDetails,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
