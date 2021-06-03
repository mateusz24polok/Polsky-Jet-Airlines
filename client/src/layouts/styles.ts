import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  content: {
    position: "relative",
    flexGrow: 1,
  },
  appBar: {
    flexGrow: 0,
  },
  footer: {
    flexGrow: 0,
  },
});
