import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import { SearchEngineContainer } from "@containers/SearchEngineContainer";
import { Discounts } from "@containers/mainPage/Discounts";
import { AboutUs } from "@containers/mainPage/AboutUs";
import { CustomersOpinions } from "@containers/mainPage/CustomersOpinions";
import { SearchEngine } from "@components/SearchEngine";
import { executeScroll } from "@utils/eventsUtils";
import { useLargeBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";

export const HomePage: React.FC = () => {
  const location = useLocation();
  const myRef = useRef<HTMLElement>(null);

  const largeBreakpointMatches = useLargeBrekpointMatchesUp();

  const homePageContentMargin = largeBreakpointMatches ? 16 : 8;

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
      <Box paddingX={homePageContentMargin}>
        <Discounts discountSectionTitle="Promocyjne Loty" />
        <Divider />
        <AboutUs sectionRef={myRef} />
        <Divider />
        <CustomersOpinions customersOpionsTitle="Klienci o Polsky Jet" />
      </Box>
    </>
  );
};
