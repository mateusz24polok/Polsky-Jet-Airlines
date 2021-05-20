import React, { useState } from "react";
import { List } from "@material-ui/core";
import { managementMenuData } from "@resources/data/management";
import { CollapsibleMenuItem } from "./CollapsibleMenuItem";
import { ButtonMenuItem } from "./ButtonMenuItem";
import {
  setMenuStateAfterButtonMenuItemClick,
  setMenuStateAfterCollapsibleMenuItemExtend,
} from "./helpers";

export const SideMenu: React.FC = () => {
  const [menuState, setMenuState] = useState(managementMenuData);

  const handleExpand = (collapsibleMenuItemId: string | number) => {
    setMenuState(previousMenuState =>
      setMenuStateAfterCollapsibleMenuItemExtend(
        previousMenuState,
        collapsibleMenuItemId,
      ),
    );
  };

  const handleMenuButtonClick = (buttonMenuItemId: string | number) => {
    setMenuState(previousMenuState =>
      setMenuStateAfterButtonMenuItemClick(previousMenuState, buttonMenuItemId),
    );
  };

  return (
    <List>
      {menuState.map(menuItem => (
        <CollapsibleMenuItem
          key={menuItem.id}
          collabsibleMenuItemData={menuItem}
          handleExpand={() => handleExpand(menuItem.id)}
        >
          {menuItem.children.map(menuItemChild => (
            <ButtonMenuItem
              key={menuItemChild.id}
              buttonMenuItemData={menuItemChild}
              handleMenuButtonClick={() =>
                handleMenuButtonClick(menuItemChild.id)
              }
            />
          ))}
        </CollapsibleMenuItem>
      ))}
    </List>
  );
};
