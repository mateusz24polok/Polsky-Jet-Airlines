import React from "react";
import { AppBar } from "../components/AppBar";
import { SearchEngineSection } from "../components/SearchEngineSection";
import { SearchEngine } from "../components/SearchEngine";
import { DiscountSection } from "../components/DiscountSection";

export const MainLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <SearchEngineSection>
        <SearchEngine />
      </SearchEngineSection>
      <DiscountSection />
    </>
  );
};
