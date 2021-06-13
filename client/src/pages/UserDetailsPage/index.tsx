import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { UserData } from "@components/user/UserData";
import { UserPurchases } from "@components/user/UserPurchases";
import { selectUserState } from "@store/slices/user";
import { routesPaths } from "@resources/res.routesPaths";
import { UserRole } from "@appTypes/user";
import { useStyles } from "./styles";

export const UserDetailsPage: React.FC = () => {
  const classes = useStyles();
  const user = useSelector(selectUserState);
  const params = useParams<{ id: string }>();

  const pathId = params.id;

  if (user.id === pathId) {
    return (
      <Grid className={classes.container} container spacing={4}>
        <Grid item md={5} xs={12}>
          <UserData
            userEmail={user.email || ""}
            userName={user.name || ""}
            userPurchases={user.purchases?.length ?? 0}
            userRole={user.role || UserRole.NONE}
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <UserPurchases />
        </Grid>
      </Grid>
    );
  }

  return <Redirect to={routesPaths.nonAuthorized} />;
};
