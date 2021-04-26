import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { mockDiscounts } from "../../../../res/data/fligthsDiscounts";

export const Discounts: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h2" align="center">
        Promocyjne Loty
      </Typography>
      <Box mt={2} p={4}>
        <Grid container spacing={4}>
          {mockDiscounts.map(flight => (
            <Grid key={flight.cityTo} item md={4} sm={6} xs={12}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={flight.image}
                    title={`Leć do ${flight.cityTo}`}
                  />
                  <CardContent>
                    <Grid container justify="space-between" wrap="nowrap">
                      <Grid item xs={8}>
                        <Typography gutterBottom variant="h6">
                          {flight.cityTo}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                          Wylot z: {flight.cityFrom}
                        </Typography>
                        <Typography variant="subtitle2">
                          Lot w jedną stronę
                        </Typography>
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
                            {flight.price} PLN
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
