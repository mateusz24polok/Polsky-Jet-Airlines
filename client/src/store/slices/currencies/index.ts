import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/setupStore";
import { CurrenciesRateData, Currency } from "@appTypes/shared/money";

interface CurrenciesState {
  selectedCurrency: Currency;
  currenciesRates: CurrenciesRateData | null;
  isProgress: boolean;
  isError: boolean;
}

const initialState: CurrenciesState = {
  selectedCurrency: Currency.PLN,
  currenciesRates: null,
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
    fetchCurrencies: (state: CurrenciesState) => {
      state.isProgress = true;
      state.isError = false;
    },
    fetchCurrenciesSuccess: (
      state: CurrenciesState,
      action: PayloadAction<CurrenciesRateData>,
    ) => {
      state.isProgress = false;
      state.isError = false;
      if (action.payload) {
        state.currenciesRates = action.payload;
      }
    },
    fetchCurrenciesError: (state: CurrenciesState) => {
      state.isProgress = false;
      state.isError = true;
    },
  },
});

export const {
  selectCurrency,
  fetchCurrencies,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
} = currenciesSlice.actions;

export const selectCurrenciesState = (state: RootState) => state.currencies;
export const selectIsProgress = (state: RootState) =>
  selectCurrenciesState(state).isProgress;
export const selectIsError = (state: RootState) =>
  selectCurrenciesState(state).isError;
export const selectSelectedCurrency = (state: RootState) =>
  selectCurrenciesState(state).selectedCurrency;
export const selectSelectedCurrencyRateBasedOnPLN = (state: RootState) => {
  const currenciesState = selectCurrenciesState(state);
  if (currenciesState && currenciesState.currenciesRates) {
    return currenciesState.selectedCurrency === Currency.PLN
      ? 1
      : currenciesState.currenciesRates[currenciesState.selectedCurrency]?.rate;
  } else {
    return 1;
  }
};

export const currenciesReducer = currenciesSlice.reducer;
