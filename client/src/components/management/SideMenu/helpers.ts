import { CollapsibleMenuItemInterface } from "@appTypes/shared/collapsibleMenu";

export const setMenuStateAfterCollapsibleMenuItemExtend = (
  previousMenuState: Array<CollapsibleMenuItemInterface>,
  collapsibleMenuItemId: string | number,
) => {
  return previousMenuState.map(menuItem => {
    if (menuItem.id === collapsibleMenuItemId)
      return { ...menuItem, isOpen: !menuItem.isOpen };
    return menuItem;
  });
};

export const getManagementMenuWithChoice = (
  menuInitialData: CollapsibleMenuItemInterface[],
  path: string,
): CollapsibleMenuItemInterface[] => {
  const buttonMenuItems = menuInitialData.flatMap(
    menuItem => menuItem.children,
  );
  // Decide which buttonMenuItem should be chosen (open) on the base of path
  buttonMenuItems.forEach(buttonMenuItem => {
    if (buttonMenuItem.path === path) {
      buttonMenuItem.isChosen = true;
    } else {
      buttonMenuItem.isChosen = false;
    }
  });
  // Decide which menuItem should be expanded initialy
  const menuDataChildWithChosenItem = menuInitialData.find(
    menuItem => menuItem.children.findIndex(child => child.isChosen) !== -1,
  );
  if (menuDataChildWithChosenItem) menuDataChildWithChosenItem.isOpen = true;
  return menuInitialData;
};

// PREVIOUSLY USED METHODS BEFORE REFACTORING //
// KEEP THEM FOR EVENTUALY FEATURE CHANGES //
export const setMenuStateAfterButtonMenuItemClick = (
  previousMenuState: Array<CollapsibleMenuItemInterface>,
  buttonMenuItemId: string | number,
) => {
  return previousMenuState.map(menuItem => {
    return {
      ...menuItem,
      children: menuItem.children.map(menuItemChild => {
        if (menuItemChild.id === buttonMenuItemId)
          return { ...menuItemChild, isChosen: true };
        return { ...menuItemChild, isChosen: false };
      }),
    };
  });
};

export const getInitialMenuChoicePath = (
  menuInitialData: CollapsibleMenuItemInterface[],
): string => {
  const buttonMenuItems = menuInitialData.flatMap(
    menuItem => menuItem.children,
  );
  const chosenMenuItem = buttonMenuItems.filter(
    buttonMenuItem => buttonMenuItem.isChosen,
  );

  return chosenMenuItem[0].path || "/";
};
