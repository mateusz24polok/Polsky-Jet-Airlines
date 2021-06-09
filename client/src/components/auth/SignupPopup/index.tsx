import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSignupPopup, selectIsSignupPopupShown } from "@store/slices/auth";
import { Popup } from "@components/shared/Popup";
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
    <Popup
      title="Rejestracja użytkownika"
      open={isSignupPopupOpen}
      handleClose={handleClose || handlePopupClose}
    >
      <SignupForm onAbort={onAbort} onSubmit={onSubmit} />
    </Popup>
  );
};
