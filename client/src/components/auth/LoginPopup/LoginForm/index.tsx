import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form as FormikForm } from "formik";
import { Box, Button } from "@material-ui/core";
import { CustomTextField } from "@components/shared/CustomTextField";
import { hideLoginPopup } from "@store/slices/auth";
import { LoginFormAndRequest } from "@appTypes/user";
import { loginSchema } from "./schema";
import { useStyles } from "./styles";

interface Props {
  onAbort?: () => void;
  onSubmit?: () => void;
}

export const LoginForm: React.FC<Props> = ({ onAbort, onSubmit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLoginSubmit = async (submitForm: () => Promise<void>) => {
    await submitForm();
    dispatch(hideLoginPopup());
  };

  const handleLoginPopupClose = () => {
    dispatch(hideLoginPopup());
  };

  const formInitialValues: LoginFormAndRequest = {
    email: "",
    password: "",
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={formInitialValues}
      validationSchema={loginSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ submitForm, dirty, errors }) => {
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
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth={true}
            />
            <Box className={classes.buttonsContainer}>
              <Button
                onClick={onAbort || handleLoginPopupClose}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Anuluj
              </Button>
              <Button
                onClick={
                  onSubmit ? onSubmit : () => handleLoginSubmit(submitForm)
                }
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!dirty || Object.keys(errors).length > 0}
              >
                Zaloguj
              </Button>
            </Box>
          </FormikForm>
        );
      }}
    </Formik>
  );
};
