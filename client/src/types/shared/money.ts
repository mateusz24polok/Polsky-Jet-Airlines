export enum Currency {
  PLN = "PLN",
  EUR = "EUR",
  USD = "USD",
}

export const appCurrencies: Currency[] = [
  Currency.PLN,
  Currency.EUR,
  Currency.USD,
];

export interface Money {
  value: number;
  currency: Currency;
}

export interface NBPRates {
  effectiveDate: string;
  mid: number;
  no: string;
}

export interface NBPCurrenciesDataResponse {
  code: Currency;
  currency: string;
  rates: NBPRates[];
  table: string;
}

export interface NBPCustomCurrencyRateResponse {
  currency: string;
  rate: number;
  date: Date;
}

export type CurrenciesCustomRate = Partial<
  Record<Currency, NBPCustomCurrencyRateResponse>
>;
