import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

interface Props {
  title: string;
  email: string;
  phoneNumber: string | number;
}

export const ContactFooter: React.FC<Props> = ({
  title,
  email,
  phoneNumber,
}) => {
  const classes = useStyles();
  const mediumBreakpointsMatches = useMediumBrekpointMatchesUp();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography
          variant={mediumBreakpointsMatches ? "h5" : "h6"}
          className={classes.footerTitleTypography}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant={mediumBreakpointsMatches ? "subtitle1" : "subtitle2"}
          className={classes.brandDetailsTypography}
        >
          {email}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant={mediumBreakpointsMatches ? "subtitle1" : "subtitle2"}
          className={classes.brandDetailsTypography}
        >
          {phoneNumber}
        </Typography>
      </Grid>
    </Grid>
  );
};
