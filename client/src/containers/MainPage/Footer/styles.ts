import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.brandBlack,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  brandNameTypography: {
    color: theme.palette.brandWhite,
    fontFamily: "Bangers",
  },
  brandDetailsTypography: {
    color: theme.palette.footerGray,
    fontFamily: "Bangers",
  },
  footerTitleTypography: {
    paddingTop: theme.spacing(2),
    color: theme.palette.footerBlue,
    textTransform: "uppercase",
    fontFamily: "Bangers",
  },
  logoGridContainer: {
    paddingRight: theme.spacing(3),
  },
  socialMediaIconsContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  socialMediaIcon: {
    color: theme.palette.socialMediaIconsAzure,
    fontSize: 48,
    borderRadius: "50%",
  },
  socialMediaIconButton: {
    paddingTop: 0,
  },
  firstSocialMediaIconButton: {
    paddingLeft: 0,
  },
  lastSocialMediaIconButton: {
    paddingRight: 0,
  },
}));
