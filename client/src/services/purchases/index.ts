import { store } from "@store/setupStore";
import { getAuthorizationHeader } from "@utils/authUtils";
import { FlightTicketPurchaseRequest } from "@appTypes/purchases";
import { createAxiosApiInstance } from "../genericApiInstance";

const flightPurchaseInstance = createAxiosApiInstance(
  "/api/v1/purchase/flight",
);

export const postFlightPurchaseService = async (
  flightId: string,
  flightPurchaseRequestBody: FlightTicketPurchaseRequest,
) => {
  try {
    await flightPurchaseInstance.post(
      `/${flightId}`,
      flightPurchaseRequestBody,
      {
        headers: {
          ...getAuthorizationHeader(store.getState().user.jwtToken),
        },
      },
    );
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
