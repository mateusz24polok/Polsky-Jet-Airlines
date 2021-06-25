import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

interface Props {
  flightId: number | string;
}

export const IncorrectFlightNumberPage: React.FC<Props> = ({ flightId }) => {
  const history = useHistory();
  const goToFlightOfferPage = () => {
    history.push(routesPaths.offerFlights);
  };

  const buttonsGroup: InfoPageButtonsGroup = {
    direction: "row",
    buttons: [
      { title: "Powrót do oferty lotów", onClick: goToFlightOfferPage },
    ],
  };

  return (
    <InfoGenericPage
      title="Nieprawidłowy numer lotu"
      icon={R.images.utilIcons.NoFlightResultIcon}
      iconAltDescription="Brak Lotów"
      subtitle={`W naszej ofercie nie istnieje lot o numerze: ${flightId}`}
      buttonsGroup={buttonsGroup}
    />
  );
};
