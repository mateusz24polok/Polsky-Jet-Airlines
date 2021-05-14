import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  flightTime: string;
}

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

export const FlightTime: React.FC<Props> = ({ flightTime }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      justify="center"
      container
      direction="column"
      alignItems="center"
    >
      <img
        src={R.images.utilIcons.AirplaneIconBlack}
        alt="Airplane Logo"
        height={40}
      />
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Czas lotu: {flightTime}
      </Typography>
    </Grid>
  );
};
