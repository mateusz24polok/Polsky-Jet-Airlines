import { AxiosResponse } from "axios";
import { store } from "@store/setupStore";
import { getAuthorizationHeader } from "@utils/authUtils";
import {
  AirportServiceResponse,
  CreateAirportRequestFormData,
} from "@appTypes/airport";
import { createAxiosApiInstance } from "../genericApiInstance";

const airportsAxiosInstance = createAxiosApiInstance("/api/v1/airports");

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
    await airportsAxiosInstance.post("/", newAirport, {
      headers: {
        ...getAuthorizationHeader(store.getState().user.jwtToken),
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
