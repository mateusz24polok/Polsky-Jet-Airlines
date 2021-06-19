import { Route } from "@appTypes/routes";
import { routesPaths } from "@resources/res.routesPaths";
import { HomePage } from "@pages/HomePage";
import { HotelsPage } from "@pages/HotelsPage";
import { CarsPage } from "@pages/CarsPage";
import { LogoutPage } from "@pages/LogoutPage";
import { FlightsResultPage } from "@pages/FlightsResultsPage";
import { ManagementPage } from "@pages/ManagementPage";
import { UserDetailsPage } from "@pages/UserDetailsPage";
import { FlightPurchasePage } from "@pages/FlightPurchasePage";
import { NonAuthorizedPage } from "@pages/NonAuthorizedPage";
import { AirportsDetailsTable } from "@components/management/AirportsDetailsTable";
import { NewAirportForm } from "@components/management/NewAirportForm";
import { FlightsDetailsTable } from "@components/management/FlightsDetailsTable";
import { NewFlightForm } from "@components/management/NewFlightForm";
import { UserRole } from "@appTypes/user";

export const routes: Route[] = [
  {
    id: "home",
    path: routesPaths.home,
    label: "Loty",
    component: HomePage,
    appBarElement: true,
  },
  {
    id: "logout",
    path: routesPaths.logout,
    component: LogoutPage,
  },
  {
    id: "hotels",
    path: routesPaths.offerHotels,
    label: "Hotele",
    component: HotelsPage,
    appBarElement: true,
  },
  {
    id: "cars",
    path: routesPaths.offerCars,
    label: "Samochody",
    component: CarsPage,
    appBarElement: true,
  },
  {
    id: "aboutUs",
    path: routesPaths.aboutUs,
    label: "O nas",
    component: HomePage,
    appBarElement: true,
    scrollable: true,
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
    id: "user",
    path: routesPaths.user,
    component: UserDetailsPage,
  },
  {
    id: "management",
    path: routesPaths.management,
    label: "Zarządzaj",
    component: ManagementPage,
    appBarElement: true,
    roleProtected: [UserRole.ADMIN],
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
  {
    id: "nonAuthorized",
    path: routesPaths.nonAuthorized,
    component: NonAuthorizedPage,
    exact: true,
  },
];
