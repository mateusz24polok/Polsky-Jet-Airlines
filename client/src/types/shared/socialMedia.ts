import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface SocialMedia {
  id: number;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
}
