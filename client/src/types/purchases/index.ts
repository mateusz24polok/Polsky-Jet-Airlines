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
