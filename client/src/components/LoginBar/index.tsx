import React from "react";
import { Button, Divider, Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";

interface Props {
  isMobileView?: boolean;
  onMenuIconClick?: () => void;
}

export const LoginBar: React.FC<Props> = ({
  isMobileView,
  onMenuIconClick,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Grid item>
        <Button color="inherit">Login</Button>
      </Grid>
      {isMobileView ? null : (
        <Divider orientation="vertical" flexItem className={classes.divider} />
      )}
      <Grid item>
        <Button color="inherit">SignUp</Button>
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
