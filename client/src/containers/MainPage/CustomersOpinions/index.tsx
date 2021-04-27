import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { CustomerOpinion } from "@components/CustomerOpinion";
import { customers } from "@data/customers";
import { useStyles } from "./styles";

interface Props {
  customersOpionsTitle: string;
}

export const CustomersOpinions: React.FC<Props> = ({
  customersOpionsTitle,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography className={classes.title} variant="h4" align="center">
        {customersOpionsTitle}
      </Typography>
      <Box>
        <Grid container justify="space-between">
          {customers.map(customer => (
            <Grid item key={customer.id} xs={1} md={3}>
              <CustomerOpinion customer={customer} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
