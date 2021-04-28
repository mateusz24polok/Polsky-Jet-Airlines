import { Theme, makeStyles } from "@material-ui/core/styles";
import { Props } from "./";

export const useStyles = makeStyles((theme: Theme) => ({
  brandNameTypography: {
    color: theme.palette.brandWhite,
    fontFamily: "Bangers",
  },
  brandDetailsTypography: {
    color: theme.palette.footerGray,
    fontFamily: "Bangers",
  },
  logo: {
    height: (props: Props) => props.logoHeight || 80,
    width: (props: Props) => props.logoWidth || "auto",
  },
  logoGridContainer: {
    paddingRight: theme.spacing(3),
  },
}));
