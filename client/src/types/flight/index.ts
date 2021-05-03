import { Ticket } from "@appTypes/ticket";
import { Airport } from "@appTypes/airport";

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
  status: FlightStatus;
  startingAirport: Airport;
  startingCity: string;
  destinationAirport: Airport;
  destinationCity: string;
  startingDate: Date;
  ticket: Array<Ticket>;
  estimatedFlightTime: number;
}

export interface FlightServiceResponse {
  data: Array<Flight>;
  flightsCount: number;
}
