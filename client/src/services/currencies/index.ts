import axios, { AxiosResponse } from "axios";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import {
  CurrenciesRateData,
  Currency,
  NBPCurrenciesDataResponse,
  NBPCustomCurrencyRateResponse,
} from "@appTypes/shared/money";

const currenciesAxiosInstance = axios.create({
  baseURL:
    (process.env.name as string) === "Polsky Jet Development App"
      ? "http://api.nbp.pl/api/exchangerates/rates/a/"
      : "https://api.nbp.pl/api/exchangerates/rates/a/",
});

export const getCurrencyRateService = async (
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

export const getAppCurrenciesRateDataService = async (): Promise<CurrenciesRateData> => {
  try {
    const [euroCustomRate, dollarCustomRate] = await Promise.all([
      getCurrencyRateService(Currency.EUR),
      getCurrencyRateService(Currency.USD),
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
