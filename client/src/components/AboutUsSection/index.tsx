import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { aboutUs } from "../../../res/data/aboutUs";

export const AboutUsSection: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography className={classes.title} variant="h4" align="center">
        {aboutUs.title}
      </Typography>
      <Typography className={classes.info} variant="subtitle1">
        {aboutUs.primaryInfo}
      </Typography>
      <Box>
        <Grid container>
          {aboutUs.featureInfoDetails.map(infoDetail => (
            <Grid
              container
              item
              xs={2}
              direction="column"
              alignItems="center"
              key={infoDetail.info}
            >
              <Grid item>
                <img
                  width={100}
                  height={100}
                  src={infoDetail.icon}
                  alt={`${infoDetail.amount} ${infoDetail.info}`}
                />
              </Grid>
              <Grid item>
                <Typography align="center" variant="h5">
                  {infoDetail.amount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  {infoDetail.info}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
