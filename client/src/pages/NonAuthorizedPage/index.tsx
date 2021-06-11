import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const NonAuthorizedPage: React.FC = () => {
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
      title="Błąd autoryzacji"
      icon={R.images.utilIcons.LockIcon}
      iconAltDescription="Lock"
      subtitle="Nie masz wystarczających uprawnień do przeglądania tej strony"
      buttonsGroup={buttonsGroup}
    />
  );
};
