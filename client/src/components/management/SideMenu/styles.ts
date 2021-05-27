import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  active: {
    color: theme.palette.brandWhite,
  },
}));
