import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import { SearchEngineContainer } from "@containers/SearchEngineContainer";
import { Discounts } from "@containers/MainPage/Discounts";
import { AboutUs } from "@containers/MainPage/AboutUs";
import { CustomersOpinions } from "@containers/MainPage/CustomersOpinions";
import { SearchEngine } from "@components/SearchEngine";
import { executeScroll } from "@utils/eventsUtils";
import {
  useLargeBrekpointMatchesUp,
  useSmallBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { getFlightsService } from "@services/flights";

export const HomePage: React.FC = () => {
  const location = useLocation();
  const myRef = useRef<HTMLElement>(null);

  useEffect(() => {
    getFlightsService()
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

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
        <SearchEngine />
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
