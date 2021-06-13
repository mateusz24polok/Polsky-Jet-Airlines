import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListComponent } from "@appTypes/shared/components";

interface Props {
  iconElement: ListComponent;
}

export const ListIconElement: React.FC<Props> = ({ iconElement }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <iconElement.icon />
      </ListItemIcon>
      <ListItemText primary={iconElement.title} />
    </ListItem>
  );
};
