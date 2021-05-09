import { Route } from "@appTypes/routes";
import { routesPaths } from "@resources/res.routesPaths";
import { HomePage } from "@pages/HomePage";
import { FlightsResultPage } from "@pages/FlightsResultsPage";

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
    id: "searchefFlightsList",
    path: routesPaths.searchedFlightsList,
    component: FlightsResultPage,
  },
];

export const navRoutes: Route[] = routes.filter(route => route.appBarElement);
