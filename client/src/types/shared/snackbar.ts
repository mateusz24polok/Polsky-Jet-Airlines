import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";

export interface Snackbar {
  message: SnackbarMessage;
  options?: OptionsObject;
  key?: SnackbarKey;
  dismissed?: boolean;
}
