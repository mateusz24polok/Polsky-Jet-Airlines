import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DesktopNavBar } from "@containers/MainPage/AppBar/DekstopNavBar";
import { MobileNavBar } from "@containers/MainPage/AppBar/MobileNavBar";
import { showLoginPopup, showSignupPopup } from "@store/slices/auth";
import { selectUserRole } from "@store/slices/user";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { getNavRoutes, getProtectedRoutesByRole } from "@utils/routesUtils";
import { routesPaths } from "@resources/res.routesPaths";
import { routes } from "@resources/res.routes";

export const AppBar: React.FC = () => {
  const mediumMatches = useMediumBrekpointMatchesUp();
  const dispatch = useDispatch();
  const history = useHistory();

  //It's needful to set state on every change of user role, because AppBar doesn't rerender after successfull login
  const userRole = useSelector(selectUserRole);
  const [navRoutes, setNavRoutes] = useState(
    getNavRoutes(getProtectedRoutesByRole(routes)),
  );
  useEffect(() => {
    setNavRoutes(getNavRoutes(getProtectedRoutesByRole(routes)));
  }, [userRole]);

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
          navRoutes={navRoutes}
        />
      ) : (
        <MobileNavBar
          onLoginClick={handleLoginPopupOpen}
          onLogoutClick={handleLogout}
          onSignupClick={handleSignupPopupOpen}
          navRoutes={navRoutes}
        />
      )}
    </>
  );
};
