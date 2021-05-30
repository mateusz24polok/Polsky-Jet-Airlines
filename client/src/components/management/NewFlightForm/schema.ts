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
  ticketsAmountEconomy: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy ekonomicznej"),
  ticketsAmountPremium: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy premium"),
  ticketsAmountStandard: Yup.number()
    .min(0)
    .required("Wprowadź liczbę wolnych biletów klasy standard"),
  ticketPriceEconomy: Yup.number()
    .min(1, "Cena biletów powinna być większa niż 1 PLN")
    .required("Wprowadź cenę biletów klasy ekonomicznej"),
  ticketPriceStandard: Yup.number()
    .min(1, "Cena biletów powinna być większa niż 1 PLN")
    .required("Wprowadź cenę biletów klasy standard"),
  ticketPricePremium: Yup.number()
    .min(1, "Cena biletów powinna być większa niż 1 PLN")
    .required("Wprowadź cenę biletów klasy premium"),
});
