import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },
}));
