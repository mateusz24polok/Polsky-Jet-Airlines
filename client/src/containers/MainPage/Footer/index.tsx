import React from "react";
import clsx from "clsx";
import { Grid, IconButton, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { ContactData } from "../../../../res/data/contact";
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
    <Grid item container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5" className={classes.footerTitleTypography}>
          Kontakt:
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.brandDetailsTypography}>
          {ContactData.email}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.brandDetailsTypography}>
          {ContactData.phoneNumber}
        </Typography>
      </Grid>
    </Grid>
  );

  const renderRightSideFooter = (): JSX.Element => (
    <Grid item container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5" className={classes.footerTitleTypography}>
          Sledź nas na:
        </Typography>
      </Grid>
      <Grid
        className={classes.socialMediaIconsContainer}
        item
        container
        justify="center"
      >
        <Grid item>
          <IconButton
            className={clsx(
              classes.socialMediaIconButton,
              classes.firstSocialMediaIconButton,
            )}
          >
            <FacebookIcon className={classes.socialMediaIcon} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton className={classes.socialMediaIconButton}>
            <TwitterIcon className={classes.socialMediaIcon} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton className={classes.socialMediaIconButton}>
            <InstagramIcon className={classes.socialMediaIcon} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            className={clsx(
              classes.socialMediaIconButton,
              classes.lastSocialMediaIconButton,
            )}
          >
            <YouTubeIcon className={classes.socialMediaIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
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
