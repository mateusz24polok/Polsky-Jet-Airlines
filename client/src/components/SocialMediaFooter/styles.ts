import { Theme, makeStyles } from "@material-ui/core/styles";
import { Props } from "./";

export const useStyles = makeStyles((theme: Theme) => ({
  footerTitleTypography: {
    paddingTop: theme.spacing(2),
    color: theme.palette.footerBlue,
    textTransform: "uppercase",
    fontFamily: "Bangers",
  },
  socialMediaIconsContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  socialMediaIcon: {
    color: theme.palette.socialMediaIconsAzure,
    borderRadius: "50%",
    fontSize: (props: Props) =>
      `${props.socialMediaIconFontSize || 48}px!important`,
  },
  socialMediaIconButton: {
    paddingTop: 0,
  },
}));
