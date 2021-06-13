import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { CurrenciesSelect } from "@components/mainPage/appBar/CurrenciesSelect";
import { selectUserId } from "@store/slices/user";
import { useStyles } from "./styles";

interface Props {
  isMobileView?: boolean;
  onMenuIconClick?: () => void;
  onLogoutClick?: () => void;
}

export const AccountBar: React.FC<Props> = ({
  isMobileView,
  onLogoutClick,
  onMenuIconClick,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const userId = useSelector(selectUserId);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  const handleMyAccountClick = () => {
    handleMenuClose();
    if (userId) {
      history.push(`/user/${userId}`);
    }
  };

  const renderProfileMenu = () => (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      disableScrollLock={true}
    >
      <MenuItem onClick={handleMyAccountClick}>Moje konto</MenuItem>
      <MenuItem onClick={handleLogoutClick}>Wyloguj</MenuItem>
    </Menu>
  );

  return (
    <>
      <Grid container justify="flex-end" alignItems="center" wrap="nowrap">
        <Grid item container justify="flex-end">
          <CurrenciesSelect />
        </Grid>
        <Grid item>
          <IconButton onClick={handleProfileMenuOpen}>
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
      {renderProfileMenu()}
    </>
  );
};
