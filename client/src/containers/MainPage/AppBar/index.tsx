import React from "react";
import { DesktopNavBar } from "./DekstopNavBar";
import { MobileNavBar } from "./MobileNavBar";
import { useMediumBrekpointMatches } from "../../../utils/mediaQuerriesUtils";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatches();

  return <>{mediumMatches ? <DesktopNavBar /> : <MobileNavBar />}</>;
};
