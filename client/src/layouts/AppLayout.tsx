import React from "react";
import { Route } from "react-router-dom";
import { Footer } from "@containers/MainPage/Footer";
import { AppBar } from "@containers/MainPage/AppBar";
import { routes } from "@resources/res.routes";
import { HomePage } from "@pages/HomePage";
import { SearchEngine } from "@components/SearchEngine";

export const AppLayout: React.FC = () => {
  console.log(routes);
  return (
    <>
      <AppBar />
      {/* <Switch>
        {routes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            component={route.component as React.FC<any>}
            exact={true}
          />
        ))}
      </Switch> */}
      <Route path="/" component={HomePage} />
      <Route path="/dupa" component={SearchEngine} />
      <Footer />
    </>
  );
};
