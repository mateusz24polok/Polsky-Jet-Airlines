export enum Currency {
  PLN = "PLN",
  EUR = "EUR",
  USD = "USD",
}

export interface Money {
  value: number;
  currency: Currency;
}
