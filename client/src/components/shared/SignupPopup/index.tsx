import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { hideSignupPopup, selectIsSignupPopupShown } from "@store/slices/auth";
import { SignupForm } from "./SignupForm";

interface Props {
  handleClose?: () => void;
  onAbort?: () => void;
  onSubmit?: () => void;
}

export const SignupPopup: React.FC<Props> = ({
  handleClose,
  onAbort,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const isSignupPopupOpen = useSelector(selectIsSignupPopupShown);

  const handlePopupClose = () => {
    dispatch(hideSignupPopup());
  };

  return (
    <Dialog open={isSignupPopupOpen} onClose={handleClose || handlePopupClose}>
      <DialogTitle>Rejestracja użytkownika</DialogTitle>
      <DialogContent>
        <SignupForm onAbort={onAbort} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};
