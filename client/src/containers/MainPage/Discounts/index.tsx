import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { FlightDiscountCard } from "@components/discount/FlightDiscountCard";
import { mockDiscounts } from "@data/fligthsDiscounts";
import { Currency } from "@appTypes/shared/money";
import {
  useMediumBrekpointMatchesUp,
  useSmallBrekpointMatchesUp,
} from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

interface Props {
  discountSectionTitle: string;
}

export const Discounts: React.FC<Props> = ({ discountSectionTitle }) => {
  const classes = useStyles();

  const smallBreakpointsMatches = useSmallBrekpointMatchesUp();
  const mediumBreakpointsMatches = useMediumBrekpointMatchesUp();

  return (
    <section className={classes.root}>
      <Typography
        variant={mediumBreakpointsMatches ? "h2" : "h4"}
        align="center"
      >
        {discountSectionTitle}
      </Typography>
      <Box mt={2} p={4}>
        <Grid
          container
          spacing={smallBreakpointsMatches ? 4 : 2}
          justify="center"
        >
          {mockDiscounts.map(flight => (
            <Grid
              className={classes.discountCardGridItem}
              key={flight.cityTo}
              item
              lg={4}
              md={6}
              sm={12}
            >
              <FlightDiscountCard
                destinationCity={flight.cityTo}
                startingCity={flight.cityFrom}
                image={flight.image}
                mediaHeight={smallBreakpointsMatches ? 300 : 200}
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
