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
  purchasedTickets: {
    economy: number;
    standard: number;
    premium: number;
  };
}
