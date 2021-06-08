import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

interface Props {
  open: boolean;
  title?: string;
  className?: string;
  handleClose?: () => void;
}

export const Popup: React.FC<Props> = ({
  handleClose,
  children,
  open,
  title,
  className,
}) => {
  return (
    <Dialog className={className} open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
