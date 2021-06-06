import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  cardTitle: {
    marginBottom: theme.spacing(2),
  },
  checkbox: {
    position: "absolute",
    left: theme.spacing(2),
    bottom: theme.spacing(1),
  },
  circular: {
    color: theme.palette.brandBlack,
  },
}));
