import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "@containers/MainPage/Footer";
import { AppBar } from "@containers/MainPage/AppBar";
import { routes } from "@resources/res.routes";

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <Switch>
        {routes.map(route => (
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
