import React from "react";
import { DesktopNavBar } from "@containers/mainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/mainPage/AppBar/MobileNavBar";
import { useMediumBrekpointMatches } from "@utils/mediaQuerriesUtils";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatches();

  return <>{mediumMatches ? <DesktopNavBar /> : <MobileNavBar />}</>;
};
