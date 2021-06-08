import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required("Podaj email")
    .email("Podaj właściwy adres email"),
  name: Yup.string()
    .min(6, "Nazwa użytkownika musi mieć minimum 6 znaków")
    .required("Podaj nazwę użytkownika"),
  password: Yup.string()
    .min(6, "Hasło musi mieć minimum 6 znaków")
    .required("Podaj hasło"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match",
  ),
});
