import axios, { AxiosResponse } from "axios";
import {
  AirportServiceResponse,
  CreateAirportRequestFormData,
} from "@appTypes/airport";

const airportsAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/airports`,
});

export const getAirportService = async (): Promise<AirportServiceResponse> => {
  try {
    const tours: AxiosResponse<AirportServiceResponse> = await airportsAxiosInstance.get(
      "/",
    );
    return tours.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const postAirportService = async (
  newAirport: CreateAirportRequestFormData,
) => {
  try {
    await airportsAxiosInstance.post("/", newAirport);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
