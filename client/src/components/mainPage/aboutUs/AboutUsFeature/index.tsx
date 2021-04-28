import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FeatureInfoDetail } from "@appTypes/shared/companyInfo";
import { useStyles } from "./styles";

export interface Props {
  featureDetails: FeatureInfoDetail;
  featureIconWidth?: number | string;
  featureIconHeight?: number | string;
}

export const AboutUsFeature: React.FC<Props> = props => {
  const { featureDetails } = props;
  const classes = useStyles(props);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <img
          className={classes.image}
          src={featureDetails.icon}
          alt={`${featureDetails.amount} ${featureDetails.info}`}
        />
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5">
          {featureDetails.amount}
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="subtitle1">
          {featureDetails.info}
        </Typography>
      </Grid>
    </Grid>
  );
};
