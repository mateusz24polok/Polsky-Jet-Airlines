import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.brandBlack,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));
