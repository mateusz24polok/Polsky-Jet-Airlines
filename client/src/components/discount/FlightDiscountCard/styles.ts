import { Theme, makeStyles } from "@material-ui/core/styles";
import { Props } from "./index";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  media: {
    height: (props: Props) => props.mediaHeight || 300,
  },
}));
