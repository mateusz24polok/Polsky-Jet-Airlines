import {
  FlightsSearchFilters,
  FlightsSearchFormFiltersValues,
} from "@appTypes/flight";

export const prepareFlightsSearchFilters = (
  flightsSearchFormFiltersValues: FlightsSearchFormFiltersValues,
): FlightsSearchFilters => {
  return {
    startingCity: flightsSearchFormFiltersValues.startingCity.value,
    destinationCity: flightsSearchFormFiltersValues.destinationCity.value,
    flightDateFrom: flightsSearchFormFiltersValues.flightDateFrom.toISOString(),
    flightDateTo: flightsSearchFormFiltersValues.flightDateTo.toISOString(),
  };
};
