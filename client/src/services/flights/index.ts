import axios, { AxiosResponse } from "axios";
import { FlightServiceResponse } from "@appTypes/flight";

const flightAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/flights`,
});

export const getFlightsService = async (): Promise<
  FlightServiceResponse | never
> => {
  try {
    const flights: AxiosResponse<FlightServiceResponse> = await flightAxiosInstance.get(
      "/",
    );
    return flights.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
