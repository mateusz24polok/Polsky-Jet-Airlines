import axios, { AxiosResponse } from "axios";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import {
  CurrenciesCustomRate,
  Currency,
  NBPCurrenciesDataResponse,
  NBPCustomCurrencyRateResponse,
} from "@appTypes/shared/money";

const currenciesAxiosInstance = axios.create({
  baseURL: "http://api.nbp.pl/api/exchangerates/rates/a/",
});

export const getCurrencyRate = async (
  currencyCode: Currency,
): Promise<NBPCustomCurrencyRateResponse> => {
  try {
    const url = prepareQueryParamsURLFromObject(
      // NBP API needs to put on URL ?format=json at the end to receive a JSON format response
      { format: "json" },
      `/${currencyCode}`,
    );
    const request: AxiosResponse<NBPCurrenciesDataResponse> = await currenciesAxiosInstance.get(
      url,
    );

    return {
      currency: request.data.currency,
      rate: request.data.rates[0].mid,
      date: new Date(request.data.rates[0].effectiveDate),
    };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getEuroAndDollarCustomRate = async (): Promise<CurrenciesCustomRate> => {
  try {
    const [euroCustomRate, dollarCustomRate] = await Promise.all([
      getCurrencyRate(Currency.EUR),
      getCurrencyRate(Currency.USD),
    ]);

    return {
      EUR: euroCustomRate,
      USD: dollarCustomRate,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
