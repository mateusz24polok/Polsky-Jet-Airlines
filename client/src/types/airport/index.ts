export enum Continent {
  EUROPE = "Europe",
  NORTH_AMERICA = "North America",
  SOUTH_AMERICA = "South America",
  ASIA = "Asia",
  AUSTRALIA = "Australia",
  AFRICA = "Africa",
}

export interface Airport {
  _id: string;
  city: string;
  country: string;
  continent: Continent;
  airport: string;
  airportKey: string;
  terminals: Array<string>;
  startingPoint: boolean;
  destinationPoint: boolean;
}

export interface AirportServiceResponse {
  status: string;
  data: Array<Airport>;
}
