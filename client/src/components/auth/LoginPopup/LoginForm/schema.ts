import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Podaj email")
    .email("Podaj właściwy adres email"),
  password: Yup.string()
    .min(6, "Hasło musi mieć minimum 6 znaków")
    .required("Podaj hasło"),
});
