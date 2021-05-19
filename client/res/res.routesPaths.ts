export interface RoutesPaths {
  readonly root: string;
  readonly home: string;
  readonly flights: string;
  readonly hotels: string;
  readonly cars: string;
  readonly aboutUs: string;
  readonly searchedFlightsList: string;
  readonly management: string;
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
};
