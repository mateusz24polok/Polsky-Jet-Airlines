import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  container: {
    margin: theme.spacing(2),
  },
}));
