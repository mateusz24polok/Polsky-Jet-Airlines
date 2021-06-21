import { AxiosResponse } from "axios";
import { store } from "@store/setupStore";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import { getAuthorizationHeader } from "@utils/authUtils";
import {
  CreateFlightRequest,
  FlightServiceResponse,
  FlightsSearchFilters,
} from "@appTypes/flight";
import { createAxiosApiInstance } from "../genericApiInstance";

const flightAxiosInstance = createAxiosApiInstance("/api/v1/flights");

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
    await flightAxiosInstance.post("/", newFlight, {
      headers: {
        ...getAuthorizationHeader(store.getState().user.jwtToken),
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
