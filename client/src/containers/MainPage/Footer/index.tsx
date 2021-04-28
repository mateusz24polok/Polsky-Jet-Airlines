import React from "react";
import { Grid } from "@material-ui/core";
import { CompanyInfoFooter } from "@components/CompanyInfoFooter";
import { ContactFooter } from "@components/ContactFooter";
import { SocialMediaFooter } from "@components/SocialMediaFooter";
import { ContactData } from "@data/contact";
import { FooterSocialMedia } from "@data/socialMedia";
import { useStyles } from "./styles";

export const Footer: React.FC = () => {
  const classes = useStyles();

  const renderLeftSideFooter = (): JSX.Element => (
    <CompanyInfoFooter
      brandCity={ContactData.city}
      brandName={ContactData.brandName}
      brandStreet={ContactData.street}
      logo={ContactData.brandLogo}
    />
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
