import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { useLargeBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { getAirportFallbackImageOnImgError } from "@utils/imageUtils";
import { Image } from "@appTypes/shared/image";

interface Props {
  date: string;
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
  date,
  time,
  city,
  airport,
  photo,
}) => {
  const classes = useStyles();
  const largeMediaBreakpointMatches = useLargeBrekpointMatchesUp();

  const renderDetailsText = (): JSX.Element => {
    return (
      <>
        <Typography variant="h6">{city}</Typography>
        <Typography variant="h6">
          {date} {time}
        </Typography>
        <Typography variant="subtitle1">{airport}</Typography>
      </>
    );
  };

  return (
    <Grid container direction="row" alignItems="center">
      {largeMediaBreakpointMatches && (
        <Grid item>
          <img
            className={classes.photo}
            src={photo}
            alt={city}
            height={120}
            onError={getAirportFallbackImageOnImgError}
          />
        </Grid>
      )}
      <Grid item>{renderDetailsText()}</Grid>
    </Grid>
  );
};
