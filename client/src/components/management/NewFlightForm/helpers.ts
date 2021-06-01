import { CreateFlightFormFormat, CreateFlightRequest } from "@appTypes/flight";

export const getCreateFlightRequest = (
  createFlightFormValues: CreateFlightFormFormat,
): CreateFlightRequest => {
  const {
    destinationAirport,
    startingAirport,
    estimatedFlightTime,
    startingDate,
    ticketPriceEconomy,
    ticketPricePremium,
    ticketPriceStandard,
    ticketsAmountEconomy,
    ticketsAmountPremium,
    ticketsAmountStandard,
  } = createFlightFormValues;

  return {
    destinationAirport: destinationAirport?.value._id || "",
    startingAirport: startingAirport?.value._id || "",
    estimatedFlightTime,
    startingDate,
    tickets: {
      economy: {
        amount: ticketsAmountEconomy,
        price: ticketPriceEconomy,
      },
      premium: {
        amount: ticketsAmountPremium,
        price: ticketPricePremium,
      },
      standard: {
        amount: ticketsAmountStandard,
        price: ticketPriceStandard,
      },
    },
  };
};
