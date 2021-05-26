import React, { useRef } from "react";
import { Button, Grid, Input, InputProps } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { useStyles } from "./styles";

interface InnerProps {
  name: string;
}

type Props = InnerProps & InputProps;
type ConfigInputField = InputProps;

export const CustomFileUploadInput = ({ name, ...otherProps }: Props) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [, meta] = useField(name);

  const fileInputRef = useRef<HTMLInputElement>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      setFieldValue(name, event.currentTarget.files[0]);
    }
  };

  const handleClearFile = () => {
    if (fileInputRef.current?.files) {
      fileInputRef.current.value = "";
    }
    setFieldValue(name, null);
  };

  const configInput: ConfigInputField = {
    ...otherProps,
    type: "file",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configInput.error = true;
  }

  return (
    <Grid container alignItems="center">
      <Input inputRef={fileInputRef} {...configInput} />
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        type="button"
        onClick={handleClearFile}
      >
        X
      </Button>
    </Grid>
  );
};
