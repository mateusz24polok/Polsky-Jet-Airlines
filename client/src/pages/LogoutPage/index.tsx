import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, userLogout } from "@store/slices/auth";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { InfoGenericPage } from "@pages/shared/InfoPage";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";

export const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const goToMainPage = () => {
    history.push(routesPaths.home);
  };

  const buttonsGroup: InfoPageButtonsGroup = {
    direction: "row",
    buttons: [{ title: "Powrót do strony głównej", onClick: goToMainPage }],
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userLogout());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <InfoGenericPage
      icon={R.images.utilIcons.SuccessCheckIcon}
      iconAltDescription="Success Logout Icon"
      buttonsGroup={buttonsGroup}
      title="Zostałeś pomyślnie wylogowany"
      subtitle="Dziękujemy za skorzystanie z usług Polsky Jet"
    />
  );
};
