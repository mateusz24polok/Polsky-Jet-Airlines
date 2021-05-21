import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { SideMenu } from "@components/management/SideMenu";
import { managementRoutes } from "@resources/res.routes";

export const ManagementPage: React.FC = () => {
  return (
    // {/* <Typography variant="h5">Managment System</Typography> */}
    <Grid
      container
      alignItems="stretch"
      wrap="nowrap"
      style={{ position: "absolute", minHeight: "100%" }}
    >
      <Grid item xs={2} style={{ backgroundColor: "gray" }}>
        <SideMenu />
      </Grid>
      <Grid item xs={10} style={{ backgroundColor: "orange" }}>
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
            <h1>Wrong management site</h1>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};
