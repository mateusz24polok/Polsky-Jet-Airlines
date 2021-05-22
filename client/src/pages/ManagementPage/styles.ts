import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    // 100vh - footer mobile height
    minHeight: "calc(100vh - 272px)",
    marginTop: 74,
    [theme.breakpoints.up("md")]: {
      // 100vh - footer desktop height - header height
      minHeight: "calc(100vh - 108px - 74px)",
      marginTop: 0,
    },
  },
  menu: {
    backgroundColor: theme.palette.mainGray,
  },
  dataContent: {
    backgroundColor: theme.palette.brandOrange,
  },
}));
