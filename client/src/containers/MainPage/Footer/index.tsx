import React from "react";
import { Grid } from "@material-ui/core";
import { CompanyInfoFooter } from "@components/mainPage/footer/CompanyInfoFooter";
import { ContactFooter } from "@components/mainPage/footer/ContactFooter";
import { SocialMediaFooter } from "@components/mainPage/footer/SocialMediaFooter";
import { ContactData } from "@data/contact";
import { FooterSocialMedia } from "@data/socialMedia";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { useStyles } from "./styles";

export const Footer: React.FC = () => {
  const classes = useStyles();

  const mediumBreakpointsMatches = useMediumBrekpointMatchesUp();

  const renderLeftSideFooter = (): JSX.Element => (
    <CompanyInfoFooter
      logoHeight={mediumBreakpointsMatches ? 80 : 50}
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
      socialMediaIconFontSize={mediumBreakpointsMatches ? 48 : 24}
    />
  );

  return (
    <footer className={classes.footer} data-testid="footer">
      <Grid
        container
        justify="space-between"
        direction={mediumBreakpointsMatches ? "row" : "column"}
        wrap="nowrap"
      >
        {renderLeftSideFooter()}
        {renderMiddleSideFooter()}
        {renderRightSideFooter()}
      </Grid>
    </footer>
  );
};
