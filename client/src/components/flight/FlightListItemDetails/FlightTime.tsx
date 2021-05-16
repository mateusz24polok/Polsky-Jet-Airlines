import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { makeStyles } from "@material-ui/core/styles";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { theme } from "@resources/theme";

interface Props {
  flightTime: string;
}

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
  downArrow: {
    margin: theme.spacing(2),
  },
  flightTimeText: {
    marginTop: theme.spacing(2),
  },
});

export const FlightTime: React.FC<Props> = ({ flightTime }) => {
  const classes = useStyles();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const renderDesktopView = (): JSX.Element => (
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
        height={30}
      />
      <Typography variant="h6" className={classes.flightTimeText}>
        Czas lotu: {flightTime}
      </Typography>
    </Grid>
  );

  const rednerMobileView = (): JSX.Element => (
    <Grid container alignItems="center">
      <img
        className={classes.downArrow}
        src={R.images.utilIcons.DownArrowIcon}
        alt="Down Arrow"
        height={90}
        width={30}
      />
      <Typography variant="h6">{flightTime}</Typography>
    </Grid>
  );

  return (
    <>
      {mediumMediaBreakpointMatches ? renderDesktopView() : rednerMobileView()}
    </>
  );
};
