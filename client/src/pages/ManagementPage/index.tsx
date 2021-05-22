import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { SideMenu } from "@components/management/SideMenu";
import { managementRoutes } from "@resources/res.routes";
import { useStyles } from "./styles";

export const ManagementPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      wrap="nowrap"
    >
      <Grid className={classes.menu} item xs={2}>
        <SideMenu />
      </Grid>
      <Grid className={classes.dataContent} item xs={10}>
        <Switch>
          {managementRoutes.map(managementRoute => (
            <Route
              key={managementRoute.id}
              exact={managementRoute.exact}
              path={managementRoute.path}
              component={managementRoute.component as React.FC<unknown>}
            />
          ))}
          <Route>
            <h1>{`Management site you're trying to reach doesn't exist`}</h1>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};
