import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { R } from "../../../res/res";
import { customersOpinion } from "../../../res/data/customersOpinion";

export const CustomersOpinionSection: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography className={classes.title} variant="h4" align="center">
        Klienci o Polsky Jet
      </Typography>
      <Box>
        <Grid container justify="space-between">
          {customersOpinion.map(customerOpion => (
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              key={customerOpion.name}
              xs={1}
              md={3}
            >
              <Grid item>
                <img
                  src={R.images.utilIcons.OpionIcon}
                  alt="opinion icon"
                  width={30}
                  height={30}
                />
              </Grid>

              <Grid item className={classes.optionGrid}>
                <Typography variant="subtitle1">
                  {customerOpion.opion}
                </Typography>
              </Grid>

              <Grid item>
                <Box mt={2}>
                  <img
                    src={customerOpion.icon}
                    alt={customerOpion.name}
                    width={80}
                    height={80}
                  />
                </Box>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1" align="center">
                  {customerOpion.name}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  {customerOpion.city}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
