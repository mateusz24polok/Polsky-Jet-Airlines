import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { ButtonMenuItemInterface } from "@appTypes/shared/collapsibleMenu";
import { useStyles } from "./styles";

interface Props {
  buttonMenuItemData: ButtonMenuItemInterface;
  handleMenuButtonClick(): void;
}

export const ButtonMenuItem: React.FC<Props> = ({
  buttonMenuItemData,
  handleMenuButtonClick,
}) => {
  const classes = useStyles();
  return (
    <ListItem button onClick={handleMenuButtonClick}>
      <ListItemText
        className={buttonMenuItemData.isChosen ? classes.active : ""}
        primary={buttonMenuItemData.label}
      />
    </ListItem>
  );
};
