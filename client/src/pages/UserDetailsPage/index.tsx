import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@material-ui/core";
import { UserData } from "@components/user/UserData";
import { UserPurchases } from "@components/user/UserPurchase";
import { fetchUserDetails, selectUserState } from "@store/slices/user";
import { routesPaths } from "@resources/res.routesPaths";
import { UserRole } from "@appTypes/user";
import { useStyles } from "./styles";

export const UserDetailsPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUserState);
  const params = useParams<{ id: string }>();
  const pathId = params.id;

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserDetails(user.id));
    }
  }, [dispatch, user.id]);

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
          <Paper>
            <Typography className={classes.title} align="center" variant="h5">
              Zamówienia
            </Typography>
            {user.purchases?.map(purchase => (
              <UserPurchases key={purchase._id} purchase={purchase} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    );
  }

  return <Redirect to={routesPaths.nonAuthorized} />;
};
