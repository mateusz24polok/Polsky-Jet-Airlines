import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  loginButton: {
    backgroundColor: theme.palette.brandOrange,
    color: theme.palette.brandWhite,
    "&:hover": {
      backgroundColor: theme.palette.brandBlack,
    },
  },
}));
