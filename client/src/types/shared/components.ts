import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

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

export interface ListComponent {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>;
}
