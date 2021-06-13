import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { selectUserId } from "@store/slices/user";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";
import { useStyles } from "./styles";

export const SuccessfulPurchasePage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const userId = useSelector(selectUserId);

  const goToMainPage = () => {
    history.push(routesPaths.home);
  };

  const goToMyAccount = () => {
    if (userId) {
      history.push(`/user/${userId}`);
    }
  };

  const buttonsGroup: InfoPageButtonsGroup = {
    direction: "row",
    buttons: [
      {
        className: classes.button,
        title: "Zobacz profil klienta",
        onClick: goToMyAccount,
      },
      {
        className: classes.button,
        title: "Powrót do strony głównej",
        onClick: goToMainPage,
      },
    ],
  };

  return (
    <InfoGenericPage
      icon={R.images.utilIcons.ShoppingSuccessfulIcon}
      iconAltDescription="Successful purchase"
      title="Gratulujemy zakupu"
      subtitle="Dziękujemy za skorzystanie z usług Polsky Jet"
      buttonsGroup={buttonsGroup}
    />
  );
};
