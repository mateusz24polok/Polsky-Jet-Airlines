import * as Yup from "yup";
import { continents } from "@appTypes/airport";

export const NewAirportSchema = Yup.object().shape({
  airport: Yup.string().required("Nowe lotnisko musi mieć nadaną nazwę"),
  airportKey: Yup.string()
    .min(6, "Klucz lotniska musi mieć min 6 znaków")
    .required("Nowe lotnisko musi mieć nadany klucz"),
  city: Yup.string().required("Nowe lotnisko musi mieć nadane miasto"),
  continent: Yup.string()
    .oneOf(continents)
    .required("Nowe lotnisko musi mieć nadany kontynent"),
  country: Yup.string().required("Nowe lotnisko musi mieć nadane państwo"),
  destinationPoint: Yup.boolean().required(
    "Zdecydyj czy lotnisko jest punktem docelowym",
  ),
  startingPoint: Yup.boolean().required(
    "Zdecyduj czy lotnisko jest punktem startowym",
  ),
  //TODO: Unhide terminals in further versions
  // terminals: Yup.string().required(
  //   "Wprowadź dostępne terminale nowego lotniska",
  // ),
});
