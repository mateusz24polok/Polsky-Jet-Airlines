import axios from "axios";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";

const flightPurchaseInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/purchase/flight`,
});

export const postFlightPurchaseService = async (
  flightId: string,
  flightPurchaseRequestBody: FlightTicketPurchaseRequest,
) => {
  try {
    await flightPurchaseInstance.post(
      `/${flightId}`,
      flightPurchaseRequestBody,
    );
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
