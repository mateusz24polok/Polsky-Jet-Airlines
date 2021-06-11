import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const NonContentPage: React.FC = () => {
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
      icon={R.images.utilIcons.NotFoundIcon}
      iconAltDescription="Not Found"
      title="Coś poszło nie tak"
      subtitle="Strona o podanym adresie nie istnieje"
      buttonsGroup={buttonsGroup}
    />
  );
};
