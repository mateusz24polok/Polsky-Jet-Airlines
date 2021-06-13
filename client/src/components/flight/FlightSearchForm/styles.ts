import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.searchEngineBackground,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
      marginTop: theme.spacing(1),
    },
  },
  autocomplete: {
    width: 300,
    padding: theme.spacing(2),
  },
  datepicker: {
    width: 300,
    padding: theme.spacing(2),

    "& label": {
      paddingLeft: 22,
      paddingTop: 22,
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 265,
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));
