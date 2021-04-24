import { R } from "../res";

export enum FlightDiscountNumber {
  LOW = 6,
  MEDIUM = 9,
  HIGH = 12,
}

export interface FlightDiscount {
  cityFrom: string;
  cityTo: string;
  price: number;
  image: string;
}

export const mockDiscounts: FlightDiscount[] = [
  {
    cityFrom: "Katowice",
    cityTo: "Berlin",
    price: 200,
    image: R.images.cities.BerlinPhoto,
  },
  {
    cityFrom: "Katowice",
    cityTo: "Bruksela",
    price: 250,
    image: R.images.cities.BrusselsPhoto,
  },
  {
    cityFrom: "Katowice",
    cityTo: "Londyn",
    price: 180,
    image: R.images.cities.LondonPhoto,
  },
  {
    cityFrom: "Katowice",
    cityTo: "Mediolan",
    price: 300,
    image: R.images.cities.MilanPhoto,
  },
  {
    cityFrom: "Katowice",
    cityTo: "Berlin",
    price: 200,
    image: R.images.cities.BerlinPhoto,
  },
  {
    cityFrom: "Katowice",
    cityTo: "Oslo",
    price: 400,
    image: R.images.cities.OsloPhoto,
  },
];
