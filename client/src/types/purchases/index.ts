import { Flight } from "@appTypes/flight";

export enum PurchaseType {
  FLIGHT = "FLIGHT",
  HOTEL = "HOTEL",
  CAR = "CAR",
}

export interface FlightTicketPurchaseFormValues {
  purchaseType: PurchaseType;
  weatherInfoAccept: boolean;
  economyTickets: number;
  standardTickets: number;
  premiumTickets: number;
  confirmPurchase: boolean;
}

export interface FlightTicketPurchaseRequest {
  purchaseType: PurchaseType;
  confirmPurchase: boolean;
  weatherInfoAccept: boolean;
  flight: string;
  orderingUser: string;
  purchasedTickets: {
    economy: number;
    standard: number;
    premium: number;
  };
}

export interface IPurchase {
  _id: string;
  confirmPurchase: boolean;
  flight: Flight;
  purchaseType: PurchaseType;
  weatherInfoAccept: boolean;
  purchasedTickets: {
    economy: number;
    standard: number;
    premium: number;
  };
  orderingUser: string;
}
