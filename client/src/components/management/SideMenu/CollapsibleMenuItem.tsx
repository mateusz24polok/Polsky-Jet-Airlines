import React from "react";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { CollapsibleMenuItemInterface } from "@appTypes/shared/collapsibleMenu";

interface Props {
  collabsibleMenuItemData: CollapsibleMenuItemInterface;
  handleExpand(): void;
}

export const CollapsibleMenuItem: React.FC<Props> = ({
  children,
  collabsibleMenuItemData,
  handleExpand,
}) => {
  return (
    <>
      <ListItem button onClick={handleExpand}>
        <ListItemText primary={collabsibleMenuItemData.label} />
        {collabsibleMenuItemData.isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {collabsibleMenuItemData.children?.length > 0 && (
        <Collapse
          in={collabsibleMenuItemData.isOpen}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
};
