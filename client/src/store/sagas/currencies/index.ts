import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchCurrencies,
  fetchCurrenciesError,
  fetchCurrenciesSuccess,
} from "@store/slices/currencies";
import { getAppCurrenciesRateDataService } from "@services/currencies";
import { CurrenciesRateData } from "@appTypes/shared/money";

function* fetchCurrenciesSagaWorker(): Generator<
  | void
  | CallEffect
  | PutEffect<{
      payload: CurrenciesRateData;
      type: string;
    }>
  | PutEffect<{ payload: undefined; type: string }>,
  void,
  CurrenciesRateData
> {
  try {
    const currenciesRateData: CurrenciesRateData = yield call(
      getAppCurrenciesRateDataService,
    );
    yield put(fetchCurrenciesSuccess(currenciesRateData));
  } catch (error) {
    yield put(fetchCurrenciesError());
  }
}

export function* fetchCurrenciesSaga() {
  yield takeLatest(fetchCurrencies.type, fetchCurrenciesSagaWorker);
}
