import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const CarsPage: React.FC = () => {
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
      title="Wypożyczenie samochodu już wkrótce w Polsky Jet"
      icon={R.images.fallback.CarFallbackPhoto}
      iconAltDescription="Auto"
      desktopIconWidth={300}
      desktopIconHeight="auto"
      mobileIconWidth={180}
      mobileIconHeight="auto"
      subtitle="Przygotowujemy dla Ciebie ofertę samochodów do wypożyczenia, aby jeszcze bardziej ułatwić Ci podróż."
      buttonsGroup={buttonsGroup}
    />
  );
};
