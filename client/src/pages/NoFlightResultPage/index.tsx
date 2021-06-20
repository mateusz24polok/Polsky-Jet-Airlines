import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const NoFlightResultPage: React.FC = () => {
  const history = useHistory();
  const goToMainPage = () => {
    history.push(routesPaths.offerFlights);
  };

  const buttonsGroup: InfoPageButtonsGroup = {
    direction: "row",
    buttons: [{ title: "Powrót do oferty lotów", onClick: goToMainPage }],
  };

  return (
    <InfoGenericPage
      title="Brak Lotów w ofercie"
      icon={R.images.utilIcons.NoFlightResultIcon}
      iconAltDescription="Brak Lotów"
      subtitle="Obecnie nie mamy w ofercie lotów spełniających twoje kryteria wyszukiwania. Przejdź do strony głównej i spróbuj raz jeszcze"
      buttonsGroup={buttonsGroup}
    />
  );
};
