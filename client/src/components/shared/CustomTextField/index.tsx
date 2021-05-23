import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldInputProps, useField } from "formik";

interface InnerProps {
  name: string;
}

type Props = InnerProps & TextFieldProps;
type ConfigTextField = TextFieldProps & FieldInputProps<any>;

export const CustomTextField = ({ name, ...otherProps }: Props) => {
  const [field, meta] = useField(name);

  const configTextField: ConfigTextField = {
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};
