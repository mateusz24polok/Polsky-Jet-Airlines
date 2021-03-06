import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { R } from "@resources/res";
import { Customer } from "@appTypes/shared/companyInfo";
import { useStyles } from "./styles";

export interface Props {
  customer: Customer;
  isMobileView?: boolean;
  opinionIconWidth?: number | string;
  opinionIconHeight?: number | string;
  customerIconWidth?: number | string;
  customerIconHeight?: number | string;
}

export const CustomerOpinion: React.FC<Props> = props => {
  const { customer, isMobileView } = props;
  const classes = useStyles(props);

  const renderMobileView = (): JSX.Element => (
    <Grid
      className={classes.customerGridContainer}
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <Box mt={2}>
          <img
            className={classes.customerIcon}
            src={customer.icon}
            alt={customer.name}
          />
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1" align="center">
          {customer.name}
        </Typography>
        <Typography variant="subtitle2" align="center">
          {customer.residenceCity}
        </Typography>
      </Grid>
      <Grid item className={classes.customerElementGrid}>
        <Typography
          className={classes.mobileOpinionTypography}
          variant="subtitle1"
        >
          {customer.opinion}
        </Typography>
      </Grid>
    </Grid>
  );

  const renderDesktopView = (): JSX.Element => (
    <Grid
      className={classes.customerGridContainer}
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <img
          className={classes.opinionIcon}
          src={R.images.utilIcons.OpinionIcon}
          alt="opinion icon"
        />
      </Grid>

      <Grid item className={classes.customerElementGrid}>
        <Typography variant="subtitle1">{customer.opinion}</Typography>
      </Grid>

      <Grid item>
        <Box mt={2}>
          <img
            className={classes.customerIcon}
            src={customer.icon}
            alt={customer.name}
          />
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1" align="center">
          {customer.name}
        </Typography>
        <Typography variant="subtitle2" align="center">
          {customer.residenceCity}
        </Typography>
      </Grid>
    </Grid>
  );

  return isMobileView ? renderMobileView() : renderDesktopView();
};
