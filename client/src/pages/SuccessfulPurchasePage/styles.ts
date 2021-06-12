import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: theme.palette.brandOrange,
    color: theme.palette.brandWhite,
    "&:hover": {
      backgroundColor: theme.palette.brandBlack,
      color: theme.palette.brandWhite,
    },
  },
}));
