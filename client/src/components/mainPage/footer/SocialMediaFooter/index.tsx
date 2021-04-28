import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { SocialMedia } from "@appTypes/shared/socialMedia";
import { useStyles } from "./styles";

export interface Props {
  socialMediaList: SocialMedia[];
  socialMediaFooterTitle: string;
  socialMediaIconFontSize?: number | string;
}

export const SocialMediaFooter: React.FC<Props> = props => {
  const { socialMediaFooterTitle, socialMediaList } = props;
  const classes = useStyles(props);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h5" className={classes.footerTitleTypography}>
          {socialMediaFooterTitle}
        </Typography>
      </Grid>
      <Grid
        className={classes.socialMediaIconsContainer}
        item
        container
        justify="center"
        wrap="nowrap"
      >
        {socialMediaList.map(SocialMedia => (
          <Grid key={SocialMedia.id} item>
            <IconButton className={classes.socialMediaIconButton}>
              <SocialMedia.Icon className={classes.socialMediaIcon} />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
