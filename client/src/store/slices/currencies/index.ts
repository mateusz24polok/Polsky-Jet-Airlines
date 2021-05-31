import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { Currency } from "@appTypes/shared/money";

interface CurrenciesState {
  selectedCurrency: Currency;
  isProgress: boolean;
  isError: boolean;
}

const initialState: CurrenciesState = {
  selectedCurrency: Currency.PLN,
  isProgress: false,
  isError: false,
};

const currenciesSlice = createSlice({
  initialState,
  name: "currencies",
  reducers: {
    selectCurrency: (
      state: CurrenciesState,
      action: PayloadAction<Currency>,
    ) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { selectCurrency } = currenciesSlice.actions;

export const selectCurrenciesState = (state: RootState) => state.currencies;
export const selectIsProgress = (state: RootState) =>
  selectCurrenciesState(state).isProgress;
export const selectIsError = (state: RootState) =>
  selectCurrenciesState(state).isError;
export const selectSelectedCurrency = (state: RootState) =>
  selectCurrenciesState(state).selectedCurrency;

export const currenciesReducer = currenciesSlice.reducer;
