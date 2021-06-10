import React from "react";
import { useDispatch } from "react-redux";
import { DesktopNavBar } from "@containers/MainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/MainPage/AppBar/MobileNavBar";
import { showLoginPopup, showSignupPopup } from "@store/slices/auth";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatchesUp();
  const dispatch = useDispatch();

  const handleSignupPopupOpen = () => {
    dispatch(showSignupPopup());
  };

  const handleLoginPopupOpen = () => {
    dispatch(showLoginPopup());
  };

  const handleLogout = () => {
    console.log("Here will be logout");
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
