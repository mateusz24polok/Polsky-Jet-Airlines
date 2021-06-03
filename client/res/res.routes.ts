import { NestedRoute, Route } from "@appTypes/routes";
import { routesPaths } from "@resources/res.routesPaths";
import { HomePage } from "@pages/HomePage";
import { FlightsResultPage } from "@pages/FlightsResultsPage";
import { ManagementPage } from "@pages/ManagementPage";
import { FlightPurchasePage } from "@pages/FlightPurchasePage";
import { AirportsDetailsTable } from "@components/management/AirportsDetailsTable";
import { NewAirportForm } from "@components/management/NewAirportForm";
import { FlightsDetailsTable } from "@components/management/FlightsDetailsTable";
import { NewFlightForm } from "@components/management/NewFlightForm";

export const routes: Route[] = [
  {
    id: "home",
    path: routesPaths.home,
    label: "Loty",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "hotels",
    path: routesPaths.offerHotels,
    label: "Hotele",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "cars",
    path: routesPaths.offerCars,
    label: "Samochody",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "aboutUs",
    path: routesPaths.aboutUs,
    label: "O nas",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "searchFlightsList",
    path: routesPaths.flights,
    component: FlightsResultPage,
  },
  {
    id: "flight",
    path: routesPaths.flight,
    component: FlightPurchasePage,
  },
  {
    id: "management",
    path: routesPaths.management,
    label: "Zarządzaj",
    component: ManagementPage,
    appBarElement: true,
    nestedRoutes: [
      {
        id: "airportsDetailsManagement",
        path: routesPaths.managementAirportsDetails,
        exact: true,
        component: AirportsDetailsTable,
      },
      {
        id: "newAirportManagement",
        path: routesPaths.managementNewAirport,
        exact: true,
        component: NewAirportForm,
      },
      {
        id: "flightsDetailsManagement",
        path: routesPaths.managementFlightsDetails,
        exact: true,
        component: FlightsDetailsTable,
      },
      {
        id: "newFlightManagement",
        path: routesPaths.managementNewFlight,
        exact: true,
        component: NewFlightForm,
      },
    ],
  },
];

export const navRoutes: Route[] = routes.filter(route => route.appBarElement);
export const managementRoutes: NestedRoute[] =
  routes.filter(route => route.id === "management")[0].nestedRoutes || [];
