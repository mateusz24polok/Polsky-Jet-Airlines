import * as Yup from "yup";

export const FlightSearchSchema = Yup.object().shape({
  startingCity: Yup.object().nullable().required("Podaj miasto wylotu").shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  destinationCity: Yup.object()
    .nullable()
    .required("Podaj miasto docelowe")
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
  flightDateFrom: Yup.date()
    .max(
      Yup.ref("flightDateTo"),
      "Data początkowa nie może być późniejsza niż końcowa",
    )
    .required("Data początkowa jest wymagana"),
  flightDateTo: Yup.date()
    .min(
      Yup.ref("flightDateFrom"),
      "Data końcowa nie może być wcześniejsza niż początkowa",
    )
    .required("Data końcowa jest wymagana"),
});
