import { Airport } from "@appTypes/airport";
import { OptionFormItem } from "@appTypes/shared/form";

export enum FlightJourneyVariants {
  ONE_WAY = "Lot w jedną stronę",
  TWO_WAY = "Lot w obie strony",
}

export enum FlightStatus {
  OPEN = "OPEN",
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
}

export interface Flight {
  _id: string;
  status: FlightStatus;
  startingAirport: Airport;
  startingCity: string;
  destinationAirport: Airport;
  destinationCity: string;
  startingDate: Date;
  ticketsLeft: {
    economy: number;
    standard: number;
    premium: number;
  };
  estimatedFlightTime: number;
}

export interface FlightServiceResponse {
  data: Array<Flight>;
  flightsCount: number;
}

export interface FlightsSearchFilters {
  startingCity: string;
  destinationCity: string;
  flightDateFrom: Date | string;
  flightDateTo: Date | string;
}

export interface FlightsSearchFormFiltersValues {
  startingCity: OptionFormItem<string>;
  destinationCity: OptionFormItem<string>;
  flightDateFrom: Date;
  flightDateTo: Date;
}

export interface CreateFlightRequest {
  startingAirport: string;
  destinationAirport: string;
  estimatedFlightTime: number;
  startingDate: Date;
  ticketsLeft: {
    economy: number;
    standard: number;
    premium: number;
  };
  status?: FlightStatus;
}

export interface CreateFlightFormFormat {
  startingAirport: OptionFormItem<Airport> | null;
  destinationAirport: OptionFormItem<Airport> | null;
  estimatedFlightTime: number;
  startingDate: Date;
  ticketsLeftEconomy: number;
  ticketsLeftStandard: number;
  ticketsLeftPremium: number;
}
