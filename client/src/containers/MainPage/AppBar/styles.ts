import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.brandBlack,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.brandWhite,
  },
}));
