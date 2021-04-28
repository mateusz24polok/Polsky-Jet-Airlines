import React from "react";
import { Box, Divider } from "@material-ui/core";
import { SearchEngineContainer } from "@containers/SearchEngineContainer";
import { Discounts } from "@containers/mainPage/Discounts";
import { AboutUs } from "@containers/mainPage/AboutUs";
import { CustomersOpinions } from "@containers/mainPage/CustomersOpinions";
import { SearchEngine } from "@components/SearchEngine";
import { theme } from "@resources/theme";

export const HomePage: React.FC = () => {
  return (
    <>
      <SearchEngineContainer>
        <SearchEngine />
      </SearchEngineContainer>
      <Box paddingX={theme.spacing(2)}>
        <Discounts discountSectionTitle="Promocyjne Loty" />
        <Divider />
        <AboutUs />
        <Divider />
        <CustomersOpinions customersOpionsTitle="Klienci o Polsky Jet" />
      </Box>
    </>
  );
};
