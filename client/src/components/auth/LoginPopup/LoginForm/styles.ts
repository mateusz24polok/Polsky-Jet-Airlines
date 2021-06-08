import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  buttonsContainer: {
    textAlign: "right",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
