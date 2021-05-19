import { Route } from "@appTypes/routes";
import { routesPaths } from "@resources/res.routesPaths";
import { HomePage } from "@pages/HomePage";
import { FlightsResultPage } from "@pages/FlightsResultsPage";
import { ManagementPage } from "@pages/ManagementPage";

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
    path: routesPaths.hotels,
    label: "Hotele",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "cars",
    path: routesPaths.cars,
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
    path: routesPaths.searchedFlightsList,
    component: FlightsResultPage,
  },
  {
    id: "management",
    path: routesPaths.management,
    label: "Zarządzaj",
    component: ManagementPage,
    appBarElement: true,
  },
];

export const navRoutes: Route[] = routes.filter(route => route.appBarElement);
