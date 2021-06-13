import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  cardTitle: {
    marginBottom: theme.spacing(2),
  },
  checkbox: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: theme.spacing(2),
      bottom: theme.spacing(1),
    },
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  circular: {
    color: theme.palette.brandBlack,
  },
}));
