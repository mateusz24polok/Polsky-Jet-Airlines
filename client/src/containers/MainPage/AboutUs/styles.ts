import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  info: {
    marginBottom: theme.spacing(2),
  },
}));
