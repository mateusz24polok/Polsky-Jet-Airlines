import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { CurrenciesSelect } from "@components/mainPage/appBar/CurrenciesSelect";
import { useStyles } from "./styles";

interface Props {
  isMobileView?: boolean;
  onMenuIconClick?: () => void;
}

export const AccountBar: React.FC<Props> = ({
  isMobileView,
  onMenuIconClick,
}) => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" alignItems="center" wrap="nowrap">
      <Grid item container justify="flex-end">
        <CurrenciesSelect />
      </Grid>
      <Grid item>
        <IconButton>
          <AccountCircleIcon className={classes.icon} fontSize="large" />
        </IconButton>
      </Grid>
      {isMobileView ? (
        <Grid item>
          <IconButton onClick={onMenuIconClick}>
            <MenuIcon className={classes.icon} />
          </IconButton>
        </Grid>
      ) : null}
    </Grid>
  );
};
