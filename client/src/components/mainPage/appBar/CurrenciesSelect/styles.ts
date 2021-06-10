import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  circularProgress: {
    color: theme.palette.brandWhite,
    marginRight: theme.spacing(1),
  },
  selectGridContainer: {
    justifySelf: "flex-end",
  },
  select: {
    color: theme.palette.brandWhite,
    "& .MuiSelect-icon": {
      color: theme.palette.brandWhite,
    },
  },
}));
