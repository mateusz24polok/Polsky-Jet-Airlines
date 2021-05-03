import React from "react";
import { DesktopNavBar } from "@containers/MainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/MainPage/AppBar/MobileNavBar";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatchesUp();

  return <>{mediumMatches ? <DesktopNavBar /> : <MobileNavBar />}</>;
};
