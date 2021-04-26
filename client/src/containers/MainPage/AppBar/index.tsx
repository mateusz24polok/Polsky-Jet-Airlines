import React from "react";
import { DesktopNavBar } from "@containers/MainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/MainPage/AppBar/MobileNavBar";
import { useMediumBrekpointMatches } from "@utils/mediaQuerriesUtils";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatches();

  return <>{mediumMatches ? <DesktopNavBar /> : <MobileNavBar />}</>;
};
