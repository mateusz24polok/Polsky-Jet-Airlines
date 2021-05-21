export interface RoutesPaths {
  readonly root: string;
  readonly home: string;
  readonly flights: string;
  readonly hotels: string;
  readonly cars: string;
  readonly aboutUs: string;
  readonly searchedFlightsList: string;
  readonly management: string;
  readonly managementAirportsDetails: string;
  readonly managementNewAirport: string;
  readonly managementFlightsDetails: string;
  readonly managementNewFlight: string;
}

export const routesPaths: RoutesPaths = {
  root: "/",
  home: "/",
  flights: "/",
  hotels: "/hotels",
  cars: "/cars",
  aboutUs: "/aboutUs",
  searchedFlightsList: "/flights",
  management: "/management",
  managementAirportsDetails: "/management/airports",
  managementNewAirport: "/management/new-airport",
  managementFlightsDetails: "/management/flights",
  managementNewFlight: "/management/new-flight",
};
