import { Theme, makeStyles } from "@material-ui/core/styles";
import { R } from "@resources/res";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${R.images.backgrounds.FlightSearchEngineSectionBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,

    [theme.breakpoints.up("md")]: {
      padding: 50,
    },
  },
}));
