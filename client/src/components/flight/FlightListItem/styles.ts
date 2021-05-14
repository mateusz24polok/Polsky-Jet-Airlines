import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
  actionsBox: {
    borderLeft: "1px solid",
    borderColor: theme.palette.footerGray,
  },
}));
