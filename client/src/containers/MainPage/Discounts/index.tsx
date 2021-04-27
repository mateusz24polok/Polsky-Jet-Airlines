import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { FlightDiscountCard } from "@components/FlightDiscountCard";
import { mockDiscounts } from "@data/fligthsDiscounts";
import { Currency } from "@appTypes/shared/money";
import { useStyles } from "./styles";

interface Props {
  discountSectionTitle: string;
}

export const Discounts: React.FC<Props> = ({ discountSectionTitle }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h2" align="center">
        {discountSectionTitle}
      </Typography>
      <Box mt={2} p={4}>
        <Grid container spacing={4}>
          {mockDiscounts.map(flight => (
            <Grid key={flight.cityTo} item md={4} sm={6} xs={12}>
              <FlightDiscountCard
                destinationCity={flight.cityTo}
                startingCity={flight.cityFrom}
                image={flight.image}
                price={{
                  value: flight.price,
                  currency: Currency.PLN,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
