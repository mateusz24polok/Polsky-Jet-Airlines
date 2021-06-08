import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form as FormikForm } from "formik";
import { Box, Button } from "@material-ui/core";
import { CustomTextField } from "@components/shared/CustomTextField";
import { hideSignupPopup } from "@store/slices/app";
import { SignupFormValues } from "@appTypes/shared/form";
import { useStyles } from "./styles";

interface Props {
  onAbort?: () => void;
  onSubmit?: () => void;
}

export const SignupForm: React.FC<Props> = ({ onAbort, onSubmit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSignupSubmit = async (submitForm: () => Promise<void>) => {
    await submitForm();
    dispatch(hideSignupPopup());
  };

  const handleSignupPopupClose = () => {
    dispatch(hideSignupPopup());
  };

  const formInitialValues: SignupFormValues = {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ submitForm }) => {
        return (
          <FormikForm>
            <CustomTextField
              className={classes.input}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth={true}
            />
            <CustomTextField
              className={classes.input}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth={true}
            />
            <CustomTextField
              className={classes.input}
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth={true}
            />
            <CustomTextField
              className={classes.input}
              name="passwordConfirm"
              label="Password Confirm"
              variant="outlined"
              type="password"
              fullWidth={true}
            />
            <Box className={classes.buttonsContainer}>
              <Button
                onClick={onSubmit || handleSignupPopupClose}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Anuluj
              </Button>
              <Button
                onClick={
                  onAbort ? onAbort : () => handleSignupSubmit(submitForm)
                }
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Zarejestruj
              </Button>
            </Box>
          </FormikForm>
        );
      }}
    </Formik>
  );
};
