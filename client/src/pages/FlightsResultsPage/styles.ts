import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.brandBlack,
    fontFamily: "Bangers",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
}));
