import React from "react";
import { MenuItem, TextField, TextFieldProps } from "@material-ui/core";
import { FieldInputProps, useField, useFormikContext } from "formik";
import { OptionFormItem } from "@appTypes/shared/form";

interface InnerProps {
  name: string;
  options: OptionFormItem[];
}

type Props = InnerProps & TextFieldProps;
type ConfigSelectField = TextFieldProps &
  FieldInputProps<HTMLTextAreaElement | HTMLInputElement>;

export const CustomSelectField = ({ name, options, ...otherProps }: Props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect: ConfigSelectField = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
