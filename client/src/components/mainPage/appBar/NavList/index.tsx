import React from "react";
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
          <Typography variant="h6" className={classes.title}>
            {route.label}
          </Typography>
        </Grid>
      ))}
    </>
  );
};
