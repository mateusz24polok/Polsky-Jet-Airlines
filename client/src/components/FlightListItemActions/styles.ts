import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  price: {
    color: theme.palette.brandOrange,
    textTransform: "uppercase",
    fontFamily: "Bangers",
  },
  button: {
    backgroundColor: theme.palette.brandOrange,
    color: theme.palette.brandWhite,
    "&:hover": {
      backgroundColor: theme.palette.brandBlack,
    },
  },
}));
