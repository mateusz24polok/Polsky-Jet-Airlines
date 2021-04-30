import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { CustomerOpinion } from "@components/mainPage/customers/CustomerOpinion";
import { customers } from "@data/customers";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

interface Props {
  customersOpionsTitle: string;
}

export const CustomersOpinions: React.FC<Props> = ({
  customersOpionsTitle,
}) => {
  const classes = useStyles();

  const mediumBreakpointMatches = useMediumBrekpointMatchesUp();

  return (
    <section className={classes.root}>
      <Typography className={classes.title} variant="h4" align="center">
        {customersOpionsTitle}
      </Typography>
      <Box>
        <Grid container justify="space-between">
          {customers.map(customer => (
            <Grid item key={customer.id} xs={mediumBreakpointMatches ? 3 : 12}>
              <CustomerOpinion
                customer={customer}
                isMobileView={!mediumBreakpointMatches}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
