import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  title: {
    padding: theme.spacing(2),
  },
}));
