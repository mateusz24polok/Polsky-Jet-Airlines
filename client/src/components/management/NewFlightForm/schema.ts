import * as Yup from "yup";

export const CreateFlightSchema = Yup.object().shape({
  destinationAirport: Yup.object()
    .nullable()
    .required("Wprowadź lotnisko docelowe")
    .shape({
      label: Yup.string().required(),
      value: Yup.object().shape({
        _id: Yup.string().required(),
        airport: Yup.string().required(),
        airportKey: Yup.string().required(),
        city: Yup.string().required(),
        continent: Yup.string().required(),
        country: Yup.string().required(),
        destinationPoint: Yup.boolean().required(),
        startingPoint: Yup.boolean().required(),
        terminals: Yup.array().required(),
      }),
    }),
  startingAirport: Yup.object()
    .nullable()
    .required("Wprowadź lotnisko startowe")
    .shape({
      label: Yup.string().required(),
      value: Yup.object().shape({
        _id: Yup.string().required(),
        airport: Yup.string(),
        airportKey: Yup.string(),
        city: Yup.string(),
        continent: Yup.string(),
        country: Yup.string(),
        destinationPoint: Yup.boolean(),
        startingPoint: Yup.boolean(),
        terminals: Yup.array(),
      }),
    }),
  estimatedFlightTime: Yup.number()
    .min(0, "Czas lotu musi być większy od 0")
    .required("Wprowadź przewidywany czas lotu"),
  startingDate: Yup.date().required("Wprowadź datę wylotu"),
  ticketsLeftEconomy: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy ekonomicznej"),
  ticketsLeftPremium: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy premium"),
  ticketsLeftStandard: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy standard"),
});
