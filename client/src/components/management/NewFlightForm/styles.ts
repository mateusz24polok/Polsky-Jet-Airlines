import { Theme, makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
    minWidth: "140px",
  },
  ticketsAmountInput: {
    marginRight: theme.spacing(2),
  },
}));
