import { Theme, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "100%",
  },
  button: {
    backgroundColor: theme.palette.brandBlack,
    color: theme.palette.brandWhite,
    marginTop: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.brandBlack,
      filter: "brightness(150%)",
    },
  },
  text: {
    margin: theme.spacing(1),
  },
  logo: {
    margin: theme.spacing(2),
  },
}));
