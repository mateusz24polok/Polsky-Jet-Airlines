import React from "react";
import { Box, Divider } from "@material-ui/core";
import { theme } from "../../res/theme";
import { AppBar } from "../containers/MainPage/AppBar";
import { SearchEngineContainer } from "../containers/SearchEngineContainer";
import { SearchEngine } from "../components/SearchEngine";
import { Discounts } from "../containers/MainPage/Discounts";
import { AboutUs } from "../containers/MainPage/AboutUs";
import { CustomersOpinions } from "../containers/MainPage/CustomersOpions";
import { Footer } from "@containers/MainPage/Footer";

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <SearchEngineContainer>
        <SearchEngine />
      </SearchEngineContainer>
      <Box paddingX={theme.spacing(2)}>
        <Discounts />
        <Divider />
        <AboutUs />
        <Divider />
        <CustomersOpinions />
      </Box>
      <Footer />
    </>
  );
};
