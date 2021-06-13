import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
  content: {
    position: "relative",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
  appBar: {
    flexGrow: 0,
  },
  footer: {
    flexGrow: 0,
  },
}));
