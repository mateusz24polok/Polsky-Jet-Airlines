import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";
import {
  useLargeBrekpointMatchesUp,
  useMediumBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { routesPaths } from "@resources/res.routesPaths";
import { useStyles } from "./styles";

interface Props {
  flightId: string;
  freeTickets: number;
  priceValuePLN: number;
}

export const FlightListItemActions: React.FC<Props> = ({
  flightId,
  freeTickets,
  priceValuePLN,
}) => {
  const classes = useStyles();
  const largeMediaBreakpointMatches = useLargeBrekpointMatchesUp();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const history = useHistory();

  const goToTheFlightPurchase = (flightId: string) => {
    history.push(`${routesPaths.flights}/${flightId}`);
  };

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
          Już od <GenericPriceText valuePLN={priceValuePLN} />
        </Typography>
      </Grid>
      {largeMediaBreakpointMatches && (
        <Grid item>
          <Typography variant="subtitle2" align="center">
            Śpiesz się zostało jeszcze tylko {freeTickets} miejsc
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Button
          color="default"
          variant="contained"
          className={classes.button}
          onClick={() => goToTheFlightPurchase(flightId)}
        >
          Zamów bilet
        </Button>
      </Grid>
    </Grid>
  );

  const renderMobileView = (): JSX.Element => (
    <>
      <Button
        color="default"
        variant="contained"
        className={classes.button}
        onClick={() => goToTheFlightPurchase(flightId)}
      >
        Bilet od{" "}
        <Typography className={classes.price} variant="h6">
          <GenericPriceText valuePLN={priceValuePLN} />
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
