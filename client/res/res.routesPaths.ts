export interface RoutesPaths {
  readonly root: string;
  readonly home: string;
  readonly offerFlights: string;
  readonly offerHotels: string;
  readonly offerCars: string;
  readonly aboutUs: string;
  readonly logout: string;
  readonly flights: string;
  readonly flight: string;
  readonly management: string;
  readonly managementAirportsDetails: string;
  readonly managementNewAirport: string;
  readonly managementFlightsDetails: string;
  readonly managementNewFlight: string;
  readonly nonAuthorized: string;
}

export const routesPaths: RoutesPaths = {
  root: "/",
  home: "/",
  offerFlights: "/",
  offerHotels: "/hotels",
  offerCars: "/cars",
  aboutUs: "/aboutUs",
  logout: "/logout",
  flights: "/flights",
  flight: "/flights/:id",
  management: "/management",
  managementAirportsDetails: "/management/airports",
  managementNewAirport: "/management/new-airport",
  managementFlightsDetails: "/management/flights",
  managementNewFlight: "/management/new-flight",
  nonAuthorized: "/non-authorized",
};
