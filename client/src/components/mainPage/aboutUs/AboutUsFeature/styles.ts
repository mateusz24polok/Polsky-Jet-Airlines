import { makeStyles } from "@material-ui/core/styles";
import { Props } from ".";

export const useStyles = makeStyles(() => ({
  image: {
    width: (props: Props) => props.featureIconWidth || 100,
    height: (props: Props) => props.featureIconHeight || 100,
  },
}));
