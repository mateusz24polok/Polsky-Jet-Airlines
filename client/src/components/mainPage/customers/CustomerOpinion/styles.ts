import { Theme, makeStyles } from "@material-ui/core/styles";
import { Props } from ".";

export const useStyles = makeStyles((theme: Theme) => ({
  customerGridContainer: {
    height: "100%",
  },
  customerElementGrid: {
    marginBottom: "auto",
    marginTop: theme.spacing(2),
  },
  opinionIcon: {
    width: (props: Props) => props.opinionIconWidth || 30,
    height: (props: Props) => props.opinionIconHeight || 30,
  },
  customerIcon: {
    width: (props: Props) => props.customerIconWidth || 80,
    height: (props: Props) => props.customerIconHeight || 80,
  },
}));
