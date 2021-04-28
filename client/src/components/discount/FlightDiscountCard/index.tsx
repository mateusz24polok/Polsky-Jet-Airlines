import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Money } from "@appTypes/shared/money";
import { Image } from "@appTypes/shared/image";
import { FlightJourneyVariants } from "@appTypes/flight";
import { useStyles } from "./styles";

export interface Props {
  startingCity: string;
  destinationCity: string;
  image: Image;
  price: Money;
  flightJourneyVariant?: FlightJourneyVariants;
  mediaHeight?: number | string;
}

export const FlightDiscountCard: React.FC<Props> = props => {
  const classes = useStyles(props);
  const {
    startingCity,
    destinationCity,
    image,
    price,
    flightJourneyVariant,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mediaHeight,
  } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={`Leć do ${destinationCity}`}
        />
        <CardContent>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid item xs={8}>
              <Typography gutterBottom variant="h6">
                {destinationCity}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                Wylot z: {startingCity}
              </Typography>
              {flightJourneyVariant && (
                <Typography variant="subtitle2">
                  {flightJourneyVariant}
                </Typography>
              )}
            </Grid>
            <Grid
              item
              xs={4}
              container
              direction="column"
              justify="space-between"
            >
              <Grid item>
                <Typography gutterBottom align="right" variant="h6">
                  Cena
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="right" variant="h5">
                  {`${price.value} ${price.currency}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
