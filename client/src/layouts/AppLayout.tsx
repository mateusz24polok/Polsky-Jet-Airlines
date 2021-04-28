import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "@containers/mainPage/Footer";
import { AppBar } from "@containers/mainPage/AppBar";
import { navRoutes } from "@resources/res.routes";

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <Switch>
        {navRoutes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            component={route.component as React.FC<unknown>}
            exact={true}
          />
        ))}
      </Switch>
      <Footer />
    </>
  );
};
