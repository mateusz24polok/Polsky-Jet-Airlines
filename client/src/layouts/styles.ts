import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    position: "relative",
  },
  appBar: {
    flexGrow: 0,
  },
  footer: {
    flexGrow: 0,
  },
});
