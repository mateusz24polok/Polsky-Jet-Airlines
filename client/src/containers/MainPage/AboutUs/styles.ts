import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    info: {
      marginBottom: theme.spacing(2),
    },
  }),
);
