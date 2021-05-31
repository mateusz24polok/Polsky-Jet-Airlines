import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
