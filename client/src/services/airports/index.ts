import axios from "axios";
import { Flight, FlightsSearchFilters } from "@appTypes/flight";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";

type FlightPostBody = Omit<Flight, "_id">;

const airportsAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/airports`,
});

export const getAirportService = async (filters?: FlightsSearchFilters) => {
  try {
    //Spread filters object in the argument to fit the type for FlightsSearchFilters
    const url = filters ? prepareQueryParamsURLFromObject({ ...filters }) : "/";
    const tours = await airportsAxiosInstance.get(url);
    return tours.data as string[];
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const postAirportService = async (newFlight: FlightPostBody) => {
  try {
    await airportsAxiosInstance.post("/", newFlight);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
