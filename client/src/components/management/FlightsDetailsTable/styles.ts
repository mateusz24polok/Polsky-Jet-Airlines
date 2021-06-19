import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  box: {
    height: "100%",
  },
  circularProgress: {
    color: theme.palette.brandBlack,
  },
  circularProgressContainer: {
    height: "100%",
  },
}));
