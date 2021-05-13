import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Footer } from "@containers/MainPage/Footer";
import { AppBar } from "@containers/MainPage/AppBar";
import { routes } from "@resources/res.routes";
import { useStyles } from "./styles";

export const AppLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column" wrap="nowrap">
      <Grid item className={classes.appBar}>
        <AppBar />
      </Grid>
      <Grid item className={classes.content}>
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
      </Grid>
      <Grid item className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
};
