export interface InfoPageButton {
  title: string;
  className?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export interface InfoPageButtonsGroup {
  direction: "row" | "column";
  buttons: InfoPageButton[];
}
