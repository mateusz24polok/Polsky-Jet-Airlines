import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Image } from "@appTypes/shared/image";
import { Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  time: string;
  city: string;
  airport: string;
  photo: Image;
}

const useStyles = makeStyles((theme: Theme) => ({
  photo: {
    marginRight: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
}));

export const AirportDetails: React.FC<Props> = ({
  time,
  city,
  airport,
  photo,
}) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <img className={classes.photo} src={photo} alt={city} height={120} />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {time} {city}
        </Typography>
        <Typography variant="h6">{airport}</Typography>
      </Grid>
    </Grid>
  );
};
