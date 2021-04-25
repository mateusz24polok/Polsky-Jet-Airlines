import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.searchEngineBackground,
  },
}));
