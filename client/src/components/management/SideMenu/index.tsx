import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { List } from "@material-ui/core";
import { managementMenuData } from "@resources/data/management";
import { ButtonMenuItemInterface } from "@appTypes/shared/collapsibleMenu";
import { CollapsibleMenuItem } from "./CollapsibleMenuItem";
import { ButtonMenuItem } from "./ButtonMenuItem";
import {
  getInitialMenuChoicePath,
  setMenuStateAfterButtonMenuItemClick,
  setMenuStateAfterCollapsibleMenuItemExtend,
} from "./helpers";

export const SideMenu: React.FC = () => {
  const history = useHistory();
  const [menuState, setMenuState] = useState(managementMenuData);

  useEffect(() => {
    const initialMenuChoicePath = getInitialMenuChoicePath(managementMenuData);
    history.push(initialMenuChoicePath);
  }, [history]);

  const handleExpand = (collapsibleMenuItemId: string | number) => {
    setMenuState(previousMenuState =>
      setMenuStateAfterCollapsibleMenuItemExtend(
        previousMenuState,
        collapsibleMenuItemId,
      ),
    );
  };

  const handleMenuButtonClick = (buttonMenuItem: ButtonMenuItemInterface) => {
    setMenuState(previousMenuState =>
      setMenuStateAfterButtonMenuItemClick(
        previousMenuState,
        buttonMenuItem.id,
      ),
    );
    history.push(buttonMenuItem.path || "/");
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
              handleMenuButtonClick={() => handleMenuButtonClick(menuItemChild)}
            />
          ))}
        </CollapsibleMenuItem>
      ))}
    </List>
  );
};
