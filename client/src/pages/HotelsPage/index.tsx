import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const HotelsPage: React.FC = () => {
  const history = useHistory();
  const goToMainPage = () => {
    history.push(routesPaths.home);
  };

  const buttonsGroup: InfoPageButtonsGroup = {
    direction: "row",
    buttons: [{ title: "Powrót do strony głównej", onClick: goToMainPage }],
  };

  return (
    <InfoGenericPage
      title="Hotele już wkrótce w ofercie Polsky Jet"
      icon={R.images.fallback.HotelFallbackPhoto}
      iconAltDescription="Hotel"
      desktopIconWidth={300}
      desktopIconHeight="auto"
      mobileIconWidth={180}
      mobileIconHeight="auto"
      subtitle="Obecnie nasz zespół przygotowuje dla Ciebie ofertę hoteli aby jeszcze bardziej ułatwić Ci podróż. Już wkrótce w naszej ofercie."
      buttonsGroup={buttonsGroup}
    />
  );
};
