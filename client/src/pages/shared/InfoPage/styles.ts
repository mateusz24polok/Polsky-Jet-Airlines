import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttonsGroup: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.brandBlack,
    color: theme.palette.brandWhite,
    "&:hover": {
      filter: "brightness(105%)",
      color: theme.palette.brandBlack,
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));
