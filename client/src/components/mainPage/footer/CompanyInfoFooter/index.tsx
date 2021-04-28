import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Image } from "@appTypes/shared/image";
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
  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid className={classes.logoGridContainer} item>
        <img className={classes.logo} src={logo} alt={brandName} />
      </Grid>
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
    </Grid>
  );
};
