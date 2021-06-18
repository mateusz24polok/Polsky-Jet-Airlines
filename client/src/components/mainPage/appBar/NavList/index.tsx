import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Grid, Typography } from "@material-ui/core";
import { routesPaths } from "@resources/res.routesPaths";
import { Route } from "@appTypes/routes";
import { useStyles } from "./styles";

interface Props {
  navRoutes: Route[];
}

export const NavList: React.FC<Props> = ({ navRoutes }) => {
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;
  console.log(location);
  return (
    <>
      {navRoutes.map(route => (
        <Grid key={route.id} item>
          {(route.scrollable && pathname === routesPaths.home) ||
          pathname === route.path ? (
            <ScrollLink
              className={classes.routerLink}
              to={route.id}
              hashSpy={true}
            >
              <Typography variant="h6" className={classes.title}>
                {route.label}
              </Typography>
            </ScrollLink>
          ) : (
            <Link
              className={classes.routerLink}
              to={route.nestedRoutes ? `${route.path}/` : route.path}
            >
              <Typography variant="h6" className={classes.title}>
                {route.label}
              </Typography>
            </Link>
          )}
        </Grid>
      ))}
    </>
  );
};
