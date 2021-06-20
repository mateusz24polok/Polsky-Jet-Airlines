import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { List } from "@material-ui/core";
import { managementMenuData as managementMenuInitialData } from "@resources/data/management";
import { routesPaths } from "@resources/res.routesPaths";
import { ButtonMenuItemInterface } from "@appTypes/shared/collapsibleMenu";
import { CollapsibleMenuItem } from "./CollapsibleMenuItem";
import { ButtonMenuItem } from "./ButtonMenuItem";
import {
  getManagementMenuWithChoice,
  setMenuStateAfterCollapsibleMenuItemExtend,
} from "./helpers";

export const SideMenu: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [menuState, setMenuState] = useState(
    getManagementMenuWithChoice(managementMenuInitialData, location.pathname),
  );

  const handleExpand = (collapsibleMenuItemId: string | number) => {
    setMenuState(previousMenuState =>
      setMenuStateAfterCollapsibleMenuItemExtend(
        previousMenuState,
        collapsibleMenuItemId,
      ),
    );
  };

  const handleMenuButtonClick = (buttonMenuItem: ButtonMenuItemInterface) => {
    history.push(buttonMenuItem.path || routesPaths.management);
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
