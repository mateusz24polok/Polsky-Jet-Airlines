import axios, { AxiosResponse } from "axios";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import {
  CreateFlightRequest,
  FlightServiceResponse,
  FlightsSearchFilters,
} from "@appTypes/flight";

const flightAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/flights`,
});

export const getFlightsService = async (
  filters?: FlightsSearchFilters,
): Promise<FlightServiceResponse> => {
  try {
    //Spread filters object in the argument to fit the type for FlightsSearchFilters
    const url = filters ? prepareQueryParamsURLFromObject({ ...filters }) : "/";
    const flights: AxiosResponse<FlightServiceResponse> = await flightAxiosInstance.get(
      url,
    );
    return flights.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const postFlightService = async (newFlight: CreateFlightRequest) => {
  try {
    await flightAxiosInstance.post("/", newFlight);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
