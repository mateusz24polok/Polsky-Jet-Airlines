import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Divider } from "@material-ui/core";
import { SearchEngineContainer } from "@containers/SearchEngineContainer";
import { Discounts } from "@containers/MainPage/Discounts";
import { AboutUs } from "@containers/MainPage/AboutUs";
import { CustomersOpinions } from "@containers/MainPage/CustomersOpinions";
import { FlightSearchForm } from "@components/flight/FlightSearchForm";
import { executeScroll } from "@utils/eventsUtils";
import {
  useLargeBrekpointMatchesUp,
  useSmallBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { fetchFlights } from "@store/slices/flights";

export const HomePage: React.FC = () => {
  const location = useLocation();
  const myRef = useRef<HTMLElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const largeBreakpointMatches = useLargeBrekpointMatchesUp();
  const smallBreakpointMatches = useSmallBrekpointMatchesUp();

  const desktopHomePageContentPadding = largeBreakpointMatches ? 16 : 8;

  const homePageContentPadding = smallBreakpointMatches
    ? desktopHomePageContentPadding
    : 2;

  useEffect(() => {
    if (location.pathname === "/aboutUs") {
      executeScroll(myRef);
    }
  }, [location.pathname]);

  return (
    <>
      <SearchEngineContainer>
        <FlightSearchForm />
      </SearchEngineContainer>
      <Box paddingX={homePageContentPadding}>
        <Discounts discountSectionTitle="Promocyjne Loty" />
        <Divider />
        <AboutUs sectionRef={myRef} />
        <Divider />
        <CustomersOpinions customersOpionsTitle="Klienci o Polsky Jet" />
      </Box>
    </>
  );
};
