import React from "react";
import { Redirect } from "react-router-dom";
import { routesPaths } from "@resources/res.routesPaths";

export const NonAuthorizedRedirect: React.FC = () => {
  return <Redirect to={routesPaths.nonAuthorized} />;
};
