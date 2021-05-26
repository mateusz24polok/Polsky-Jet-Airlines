import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    padding: theme.spacing(0.25),
    marginLeft: theme.spacing(1),
  },
}));
