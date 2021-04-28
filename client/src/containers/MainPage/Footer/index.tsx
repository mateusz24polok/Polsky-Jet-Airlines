import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { SocialMediaFooter } from "@components/SocialMediaFooter";
import { ContactFooter } from "@components/ContactFooter";
import { ContactData } from "@data/contact";
import { FooterSocialMedia } from "@data/socialMedia";
import { useStyles } from "./styles";

export const Footer: React.FC = () => {
  const classes = useStyles();

  const renderLeftSideFooter = (): JSX.Element => (
    <Grid item container wrap="nowrap" alignItems="center">
      <Grid className={classes.logoGridContainer} item>
        <img src={ContactData.brandLogo} alt="logo" height={80} />
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.brandNameTypography}>
            {ContactData.brandName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.brandDetailsTypography}>
            {ContactData.city}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.brandDetailsTypography}>
            {ContactData.street}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const renderMiddleSideFooter = (): JSX.Element => (
    <ContactFooter
      title="Kontakt:"
      email={ContactData.email}
      phoneNumber={ContactData.phoneNumber}
    />
  );

  const renderRightSideFooter = (): JSX.Element => (
    <SocialMediaFooter
      socialMediaFooterTitle="Sledź nas na:"
      socialMediaList={FooterSocialMedia}
    />
  );

  return (
    <footer className={classes.footer} data-testid="footer">
      <Grid container justify="space-between" wrap="nowrap">
        {renderLeftSideFooter()}
        {renderMiddleSideFooter()}
        {renderRightSideFooter()}
      </Grid>
    </footer>
  );
};
