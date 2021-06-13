import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonsGroup: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(1),
      right: theme.spacing(2),
    },
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));
