import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarKey, useSnackbar } from "notistack";
import { removeSnackbar, selectSnackbarNotifications } from "@store/slices/app";

let displayed: SnackbarKey[] = [];

export const SnackBar: React.FC = () => {
  const dispatch = useDispatch();
  const snackbarNotifications = useSelector(selectSnackbarNotifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter(key => id !== key)];
  };

  useEffect(() => {
    snackbarNotifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (key) {
          if (dismissed) {
            // dismiss snackbar using notistack
            closeSnackbar(key);
            return;
          }

          // do nothing if snackbar is already displayed
          if (displayed.includes(key)) return;

          // display snackbar using notistack
          enqueueSnackbar(message, {
            key,
            ...options,
            onClose: (event, reason, myKey) => {
              if (options.onClose) {
                options.onClose(event, reason, myKey);
              }
            },
            onExited: (event, myKey) => {
              // remove this snackbar from redux store
              dispatch(removeSnackbar(myKey));
              removeDisplayed(myKey);
            },
          });

          // keep track of snackbars that we've displayed
          storeDisplayed(key);
        }
      },
    );
  }, [snackbarNotifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};
