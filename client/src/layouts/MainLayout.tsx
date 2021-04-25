import React from "react";
import { Box, Divider } from "@material-ui/core";
import { theme } from "../../res/theme";
import { AppBar } from "../components/AppBar";
import { SearchEngineSection } from "../components/SearchEngineSection";
import { SearchEngine } from "../components/SearchEngine";
import { DiscountSection } from "../components/DiscountSection";
import { AboutUsSection } from "../components/AboutUsSection";
import { CustomersOpinionSection } from "../components/CustomersOpionSection";
import { Footer } from "@components/Footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <SearchEngineSection>
        <SearchEngine />
      </SearchEngineSection>
      <Box paddingX={theme.spacing(2)}>
        <DiscountSection />
        <Divider />
        <AboutUsSection />
        <Divider />
        <CustomersOpinionSection />
      </Box>
      <Footer />
    </>
  );
};
