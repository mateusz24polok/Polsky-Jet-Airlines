import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },

  input: {
    margin: theme.spacing(2),
    minWidth: "300px",
  },

  checkbox: {
    margin: theme.spacing(2),
  },

  button: {
    margin: theme.spacing(2),
  },
}));
