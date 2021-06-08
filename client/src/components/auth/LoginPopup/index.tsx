import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoginPopup, selectIsLoginPopupShown } from "@store/slices/auth";
import { Popup } from "@components/shared/Popup";
import { LoginForm } from "./LoginForm";

interface Props {
  handleClose?: () => void;
  onAbort?: () => void;
  onSubmit?: () => void;
}

export const LoginPopup: React.FC<Props> = ({
  handleClose,
  onAbort,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const isLoginPopupOpen = useSelector(selectIsLoginPopupShown);

  const handlePopupClose = () => {
    dispatch(hideLoginPopup());
  };

  return (
    <Popup
      title="Logowanie użytkownika"
      open={isLoginPopupOpen}
      handleClose={handleClose || handlePopupClose}
    >
      <LoginForm onAbort={onAbort} onSubmit={onSubmit} />
    </Popup>
  );
};
