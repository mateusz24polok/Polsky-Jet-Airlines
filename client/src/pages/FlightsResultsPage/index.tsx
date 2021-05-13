import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchFlights,
  selectFlights,
  selectIsProgress,
} from "@store/slices/flights";
import { prepareObjectFromQueryParamsURL } from "@utils/urlUtils";
import { FlightsSearchFilters } from "@appTypes/flight";
import { FlightListContainer } from "@containers/FlightListContainer";
import { FlightListItem } from "@components/FlightListItem";

export const FlightsResultPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const flightsSearchFiltersFromURLQueryParams = prepareObjectFromQueryParamsURL(
    location.search,
  );

  const flights = useSelector(selectFlights);
  const isProgress = useSelector(selectIsProgress);

  useEffect(() => {
    dispatch(
      fetchFlights(
        flightsSearchFiltersFromURLQueryParams as FlightsSearchFilters,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location]);

  console.log(flights);

  const renderFlightsList = (): JSX.Element => (
    <ul>
      <FlightListItem />
      {/* {flights.map(flight => (
        <li key={flight._id}>
          Lot z {flight.startingCity} do {flight.destinationCity} dnia:{" "}
          {flight.startingDate}
        </li>
      ))} */}
    </ul>
  );

  const renderFallbackView = (): JSX.Element => <h2>Brak wyników</h2>;

  const renderLoadingView = (): JSX.Element => <h2>Ładowanie wyników...</h2>;

  return (
    <FlightListContainer>
      <h1>New page with flight results</h1>
      {isProgress
        ? renderLoadingView()
        : flights.length > 0
        ? renderFlightsList()
        : renderFallbackView()}
    </FlightListContainer>
  );
};
