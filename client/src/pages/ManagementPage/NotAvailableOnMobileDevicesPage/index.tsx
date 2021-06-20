import React from "react";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const ManagementNotAvailableOnMobileDevicesPage: React.FC = () => {
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
      icon={R.images.utilIcons.NotAvailableOnMobileDevicesIcon}
      iconAltDescription="Not Found"
      mobileIconHeight={80}
      mobileIconWidth="auto"
      title="Strona niedostępna"
      subtitle="Zarządzanie lotniskami i lotami nie jest dostępne na urządzeniach mobilnych. Otwórz stronę na komputerze stacjonarnym bądź laptopie."
      buttonsGroup={buttonsGroup}
    />
  );
};
