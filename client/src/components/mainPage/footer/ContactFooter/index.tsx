import React from "react";
import { Grid, Typography } from "@material-ui/core";
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
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5" className={classes.footerTitleTypography}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.brandDetailsTypography}>
          {email}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.brandDetailsTypography}>
          {phoneNumber}
        </Typography>
      </Grid>
    </Grid>
  );
};
