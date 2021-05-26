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