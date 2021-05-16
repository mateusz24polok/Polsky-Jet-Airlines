import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  price: {
    [theme.breakpoints.up("md")]: {
      color: theme.palette.brandOrange,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0.5),
    },
    color: theme.palette.brandWhite,
    textTransform: "uppercase",
    fontFamily: "Bangers",
  },
  button: {
    backgroundColor: theme.palette.brandOrange,
    color: theme.palette.brandWhite,
    "&:hover": {
      backgroundColor: theme.palette.brandBlack,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      minWidth: "200px",
    },
  },
}));
