import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DesktopNavBar } from "@containers/MainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/MainPage/AppBar/MobileNavBar";
import { showLoginPopup, showSignupPopup } from "@store/slices/auth";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { routesPaths } from "@resources/res.routesPaths";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatchesUp();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignupPopupOpen = () => {
    dispatch(showSignupPopup());
  };

  const handleLoginPopupOpen = () => {
    dispatch(showLoginPopup());
  };

  const handleLogout = () => {
    history.push(routesPaths.logout);
  };

  return (
    <>
      {mediumMatches ? (
        <DesktopNavBar
          onLoginClick={handleLoginPopupOpen}
          onLogoutClick={handleLogout}
          onSignupClick={handleSignupPopupOpen}
        />
      ) : (
        <MobileNavBar
          onLoginClick={handleLoginPopupOpen}
          onLogoutClick={handleLogout}
          onSignupClick={handleSignupPopupOpen}
        />
      )}
    </>
  );
};
