import { Route } from "@appTypes/routes";
import { routesPaths } from "@resources/res.routesPaths";
import { HomePage } from "@pages/HomePage";

export const routes: Route[] = [
  {
    id: "home",
    path: routesPaths.home,
    label: "Loty",
    component: HomePage,
  },
  {
    id: "flights",
    path: routesPaths.flights,
    label: "Loty",
    component: HomePage,
  },
  {
    id: "hotels",
    path: routesPaths.hotels,
    label: "Hotele",
    component: HomePage,
  },
  {
    id: "cars",
    path: routesPaths.cars,
    label: "Samochody",
    component: HomePage,
  },
  {
    id: "aboutUs",
    path: routesPaths.aboutUs,
    label: "O nas",
    component: HomePage,
  },
];
