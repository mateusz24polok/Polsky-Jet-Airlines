import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import {
  useLargeBrekpointMatchesUp,
  useMediumBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { Money } from "@appTypes/shared/money";
import { useStyles } from "./styles";

interface Props {
  price: Money;
}

export const FlightListItemActions: React.FC<Props> = ({ price }) => {
  const classes = useStyles();
  const largeMediaBreakpointMatches = useLargeBrekpointMatchesUp();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const renderDesktopView = (): JSX.Element => (
    <Grid
      container
      direction={mediumMediaBreakpointMatches ? "column" : "row"}
      wrap="nowrap"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Typography className={classes.price} variant="h5" align="center">
          Już od {price.value} {price.currency}
        </Typography>
      </Grid>
      {largeMediaBreakpointMatches && (
        <Grid item>
          <Typography variant="subtitle2" align="center">
            Śpiesz się zostało jeszcze tylko x miejsc
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Button color="default" variant="contained" className={classes.button}>
          Zamów bilet
        </Button>
      </Grid>
    </Grid>
  );

  const renderMobileView = (): JSX.Element => (
    <>
      <Button color="default" variant="contained" className={classes.button}>
        Bilet od{" "}
        <Typography className={classes.price} variant="h6">
          {price.value} {price.currency}
        </Typography>
      </Button>
    </>
  );

  return (
    <>
      {mediumMediaBreakpointMatches ? renderDesktopView() : renderMobileView()}
    </>
  );
};