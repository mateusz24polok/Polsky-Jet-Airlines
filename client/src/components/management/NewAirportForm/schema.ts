import * as Yup from "yup";
import { continents } from "@appTypes/airport";

export const NewAirportSchema = Yup.object().shape({
  airport: Yup.string().required("Nowe lotnisko musi mieć nadaną nazwę"),
  airportKey: Yup.string().required("Nowe lotnisko musi mieć nadany klucz"),
  city: Yup.string().required("Nowe lotnisko musi mieć nadane miasto"),
  continent: Yup.string().required("Nowe lotnisko musi mieć nadany kontynent"),
  country: Yup.string()
    .oneOf(continents)
    .required("Nowe lotnisko musi mieć nadane państwo"),
  destinationPoint: Yup.boolean().required(
    "Zdecydyj czy lotnisko jest punktem docelowym",
  ),
  startingPoint: Yup.boolean().required(
    "Zdecyduj czy lotnisko jest punktem startowym",
  ),
  terminals: Yup.string().required(
    "Wprowadź dostępne terminale nowego lotniska",
  ),
});
