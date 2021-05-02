import axios from "axios";
import { Error } from "mongoose";

const flightAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/flights`,
});

export const getFlightsService = async () => {
  try {
    const flights = await flightAxiosInstance.get("/");
    return flights;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
