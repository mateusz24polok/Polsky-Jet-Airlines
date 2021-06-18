import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    paddingTop: theme.spacing(0.25),
    paddingBottom: theme.spacing(0.25),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  label: {
    paddingTop: theme.spacing(0.25),
    paddingBottom: theme.spacing(0.25),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.projectIndigo,
    color: theme.palette.brandWhite,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: "2px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    fontSize: "0.875rem",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[4],
    },
  },
}));
