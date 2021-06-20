import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { SideMenu } from "@components/management/SideMenu";
import { routes } from "@resources/res.routes";
import { routesPaths } from "@resources/res.routesPaths";
import { getManagementRoutes } from "@utils/routesUtils";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { ManagementNotAvailableOnMobileDevicesPage } from "./NotAvailableOnMobileDevicesPage";
import { useStyles } from "./styles";

export const ManagementPage: React.FC = () => {
  const classes = useStyles();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();
  return (
    <>
      {mediumMediaBreakpointMatches ? (
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
              {getManagementRoutes(routes).map(managementRoute => (
                <Route
                  key={managementRoute.id}
                  exact={managementRoute.exact}
                  path={managementRoute.path}
                  component={managementRoute.component as React.FC<unknown>}
                />
              ))}
              <Route>
                <Redirect to={routesPaths.managementAirportsDetails} />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      ) : (
        <ManagementNotAvailableOnMobileDevicesPage />
      )}
    </>
  );
};
