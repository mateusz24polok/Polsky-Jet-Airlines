import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    color: theme.palette.brandWhite,
  },
  divider: {
    backgroundColor: theme.palette.brandWhite,
  },
}));
