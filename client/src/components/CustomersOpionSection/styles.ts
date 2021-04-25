import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    optionGrid: {
      marginBottom: "auto",
      marginTop: theme.spacing(2),
    },
  }),
);
