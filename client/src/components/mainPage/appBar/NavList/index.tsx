import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { Route } from "@appTypes/routes";
import { useStyles } from "./styles";

interface Props {
  navRoutes: Route[];
}

export const NavList: React.FC<Props> = ({ navRoutes }) => {
  const classes = useStyles();
  return (
    <>
      {navRoutes.map(route => (
        <Grid key={route.id} item>
          <Link className={classes.routerLink} to={route.path}>
            <Typography variant="h6" className={classes.title}>
              {route.label}
            </Typography>
          </Link>
        </Grid>
      ))}
    </>
  );
};
