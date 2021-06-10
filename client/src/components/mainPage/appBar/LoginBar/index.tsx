import React from "react";
import { Button, Divider, Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { CurrenciesSelect } from "@components/mainPage/appBar/CurrenciesSelect";
import { useStyles } from "./styles";

interface Props {
  isMobileView?: boolean;
  onMenuIconClick?: () => void;
  onSignupClick?: () => void;
  onLoginClick?: () => void;
}

export const LoginBar: React.FC<Props> = ({
  isMobileView,
  onMenuIconClick,
  onLoginClick,
  onSignupClick,
}) => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" alignItems="center" wrap="nowrap">
      <Grid item container justify="flex-end">
        <CurrenciesSelect />
      </Grid>
      <Grid item>
        <Button onClick={onLoginClick} color="inherit">
          Login
        </Button>
      </Grid>
      {isMobileView ? null : (
        <Divider orientation="vertical" flexItem className={classes.divider} />
      )}
      <Grid item>
        <Button onClick={onSignupClick} color="inherit">
          SignUp
        </Button>
      </Grid>
      {isMobileView ? (
        <Grid item>
          <IconButton onClick={onMenuIconClick}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Grid>
      ) : null}
    </Grid>
  );
};
