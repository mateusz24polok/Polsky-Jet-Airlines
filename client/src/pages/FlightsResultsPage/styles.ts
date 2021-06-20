import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.brandBlack,
    fontFamily: "Bangers",
    marginBottom: theme.spacing(1),
  },
  circularProgress: {
    color: theme.palette.brandBlack,
  },
  circularProgressContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
