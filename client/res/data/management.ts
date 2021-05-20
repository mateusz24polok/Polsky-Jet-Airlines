import { CollapsibleMenuItemInterface } from "@appTypes/shared/collapsibleMenu";

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
      },
      {
        id: "CreateNewAirportButtonMenuItem",
        label: "Create New Airport",
        isChosen: false,
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
      },
      {
        id: "CreateNewFlightButtonMenuItem",
        label: "Create New Flight",
        isChosen: false,
      },
    ],
  },
];
