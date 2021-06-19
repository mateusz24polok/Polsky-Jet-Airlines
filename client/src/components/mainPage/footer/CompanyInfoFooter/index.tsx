import React from "react";
import clsx from "clsx";
import { Grid, Typography } from "@material-ui/core";
import { Image } from "@appTypes/shared/image";
import {
  useLargeBrekpointMatchesUp,
  useMediumBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

export interface Props {
  logo: Image;
  logoHeight?: number | string;
  logoWidth?: number | string;
  brandName: string;
  brandCity: string;
  brandStreet: string;
}

export const CompanyInfoFooter: React.FC<Props> = props => {
  const { brandCity, brandName, brandStreet, logo } = props;
  const classes = useStyles(props);

  const mediumBreakpointsMatches = useMediumBrekpointMatchesUp();
  const largeBreakpointMatches = useLargeBrekpointMatchesUp();

  const extraMediumBreakpointClassForLogo = mediumBreakpointsMatches
    ? ""
    : classes.logoMediumBreakpoint;

  return (
    <Grid justify="center" container wrap="nowrap" alignItems="center">
      <Grid className={classes.logoGridContainer} item>
        <img
          className={clsx(classes.logo, extraMediumBreakpointClassForLogo)}
          src={logo}
          alt={brandName}
        />
      </Grid>
      {largeBreakpointMatches && (
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h4" className={classes.brandNameTypography}>
              {brandName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.brandDetailsTypography}>
              {brandCity}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.brandDetailsTypography}>
              {brandStreet}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
