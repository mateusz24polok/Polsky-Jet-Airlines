import { CollapsibleMenuItemInterface } from "@appTypes/shared/collapsibleMenu";
import { routesPaths } from "@resources/res.routesPaths";

export const managementMenuData: Array<CollapsibleMenuItemInterface> = [
  {
    id: "AirportsCollapsibleMenuItem",
    label: "Airports",
    isOpen: false,
    children: [
      {
        id: "AirportsDetailsButtonMenuItem",
        label: "Airports Details",
        isChosen: true,
        path: routesPaths.managementAirportsDetails,
      },
      {
        id: "CreateNewAirportButtonMenuItem",
        label: "Create New Airport",
        isChosen: false,
        path: routesPaths.managementNewAirport,
      },
    ],
  },
  {
    id: "FlightsCollapsibleMenuItem",
    label: "Flights",
    isOpen: false,
    children: [
      {
        id: "FlightsDetailsButtonMenuItem",
        label: "Flights Details",
        isChosen: false,
        path: routesPaths.managementFlightsDetails,
      },
      {
        id: "CreateNewFlightButtonMenuItem",
        label: "Create New Flight",
        isChosen: false,
        path: routesPaths.managementNewFlight,
      },
    ],
  },
];
