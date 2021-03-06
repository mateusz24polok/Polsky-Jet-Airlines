import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },
}));
