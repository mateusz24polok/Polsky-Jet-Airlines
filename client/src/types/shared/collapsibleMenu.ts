export interface ButtonMenuItemInterface {
  id: string | number;
  label: string;
  isChosen: boolean;
  path?: string;
}

export interface CollapsibleMenuItemInterface {
  id: string | number;
  label: string;
  isOpen: boolean;
  children: Array<ButtonMenuItemInterface>;
}
