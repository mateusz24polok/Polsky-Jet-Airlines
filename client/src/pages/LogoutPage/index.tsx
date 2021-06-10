import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { routesPaths } from "@resources/res.routesPaths";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

export const LogoutPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  const goToMainPage = () => {
    history.push(routesPaths.home);
  };

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <img
        src={R.images.utilIcons.SuccessCheckIcon}
        alt="success logout icon"
        width={mediumMediaBreakpointMatches ? 120 : 60}
        height={mediumMediaBreakpointMatches ? 120 : 60}
      />
      <Typography
        className={classes.title}
        variant={mediumMediaBreakpointMatches ? "h4" : "h5"}
        align="center"
      >
        Dziękujemy za skorzystanie z usług Polsky Jet
      </Typography>
      <Typography
        className={classes.title}
        variant={mediumMediaBreakpointMatches ? "h5" : "h6"}
        align="center"
      >
        Zostałeś pomyślnie wylogowany
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        onClick={goToMainPage}
      >
        Powrót do strony głównej
      </Button>
    </Grid>
  );
};
