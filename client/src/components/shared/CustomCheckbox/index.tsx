import React from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { FieldInputProps, useField, useFormikContext } from "formik";

interface InnerProps {
  name: string;
  label: string;
  legend?: string;
}

type Props = InnerProps & CheckboxProps;
type ConfigCheckbox = CheckboxProps & FieldInputProps<HTMLInputElement>;
type ConfigFormControl = FormControlProps & FieldInputProps<HTMLInputElement>;

export const CustomCheckbox = ({
  name,
  label,
  legend,
  ...otherProps
}: Props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };

  const configCheckbox: ConfigCheckbox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  const configFormControl: ConfigFormControl = {
    ...field,
  };

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={field.value as boolean} {...configCheckbox} />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};
