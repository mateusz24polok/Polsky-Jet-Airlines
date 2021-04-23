export enum FlightDiscountNumber {
  LOW = 6,
  MEDIUM = 9,
  HIGH = 12,
}

export interface FlightDiscount {
  cityFrom: string;
  cityTo: string;
  price: number;
}
