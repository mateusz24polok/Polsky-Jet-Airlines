import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { NoFlightResultPage } from "@pages/NoFlightResultPage";
import { FlightListContainer } from "@containers/FlightListContainer";
import { FlightListItem } from "@components/flight/FlightListItem";
import {
  fetchFlights,
  selectFlights,
  selectIsProgress,
} from "@store/slices/flights";
import { prepareObjectFromQueryParamsURL } from "@utils/urlUtils";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { FlightsSearchFilters } from "@appTypes/flight";
import { useStyles } from "./styles";

export const FlightsResultPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();
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

  const renderFlightsListTitle = (): JSX.Element => (
    <Typography className={classes.title} variant="h4" align="center">
      Wyszukane loty
    </Typography>
  );

  const renderFlightsList = (): JSX.Element => (
    <Grid
      container
      justify="space-around"
      direction={mediumMediaBreakpointMatches ? "column" : "row"}
    >
      {renderFlightsListTitle()}
      {flights.map(flight => (
        <FlightListItem key={flight._id} flight={flight} />
      ))}
    </Grid>
  );

  const renderFallbackView = (): JSX.Element => <NoFlightResultPage />;

  const renderLoadingView = (): JSX.Element => {
    return (
      <Grid
        className={classes.circularProgressContainer}
        container
        justify="center"
        alignItems="center"
      >
        <CircularProgress className={classes.circularProgress} size={64} />
      </Grid>
    );
  };

  return (
    <FlightListContainer>
      {isProgress
        ? renderLoadingView()
        : flights.length > 0
        ? renderFlightsList()
        : renderFallbackView()}
    </FlightListContainer>
  );
};
