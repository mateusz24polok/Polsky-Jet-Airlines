import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { AboutUsFeature } from "@components/mainPage/aboutUs/AboutUsFeature";
import { aboutUs } from "@data/aboutUs";
import { useStyles } from "./styles";

interface Props {
  sectionRef: React.LegacyRef<HTMLElement>;
}

export const AboutUs: React.FC<Props> = ({ sectionRef }) => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="aboutUs" ref={sectionRef}>
      <Typography className={classes.title} variant="h4" align="center">
        {aboutUs.title}
      </Typography>
      <Typography className={classes.info} variant="subtitle1">
        {aboutUs.primaryInfo}
      </Typography>
      <Box>
        <Grid container>
          {aboutUs.featureInfoDetails.map(infoDetail => (
            <Grid key={infoDetail.id} item xs={2}>
              <AboutUsFeature featureDetails={infoDetail} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};
