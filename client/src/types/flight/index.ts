import { Airport } from "@appTypes/airport";
import { OptionFormItem } from "@appTypes/shared/form";
import { Money } from "@appTypes/shared/money";

export enum FlightJourneyVariants {
  ONE_WAY = "Lot w jedną stronę",
  TWO_WAY = "Lot w obie strony",
}

export enum FlightStatus {
  OPEN = "OPEN",
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
}

export interface TicketUI {
  amount: number;
  price: Money;
}

export interface TicketData {
  amount: number;
  price: number;
}

export interface Tickets {
  economy: TicketData;
  standard: TicketData;
  premium: TicketData;
}

export interface Flight {
  _id: string;
  status: FlightStatus;
  startingAirport: Airport;
  startingCity: string;
  destinationAirport: Airport;
  destinationCity: string;
  startingDate: Date;
  tickets: Tickets;
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
  startingCity: OptionFormItem<string> | null;
  destinationCity: OptionFormItem<string> | null;
  flightDateFrom: Date;
  flightDateTo: Date;
}

export interface CreateFlightRequest {
  startingAirport: string;
  destinationAirport: string;
  estimatedFlightTime: number;
  startingDate: Date;
  tickets: Tickets;
  status?: FlightStatus;
}

export interface CreateFlightFormFormat {
  startingAirport: OptionFormItem<Airport> | null;
  destinationAirport: OptionFormItem<Airport> | null;
  estimatedFlightTime: number;
  startingDate: Date;
  ticketsAmountEconomy: number;
  ticketsAmountStandard: number;
  ticketsAmountPremium: number;
  ticketPriceEconomy: number;
  ticketPriceStandard: number;
  ticketPricePremium: number;
}
