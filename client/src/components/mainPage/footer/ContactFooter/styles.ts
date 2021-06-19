import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  brandDetailsTypography: {
    color: theme.palette.footerGray,
    fontFamily: "Bangers",
  },
  footerTitleTypography: {
    paddingTop: theme.spacing(1),
    color: theme.palette.footerBlue,
    textTransform: "uppercase",
    fontFamily: "Bangers",
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
    },
  },
}));
