import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import TodayIcon from "@material-ui/icons/Today";
import EventIcon from "@material-ui/icons/Event";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Flight } from "@appTypes/flight";
import { getNextDateAfterTimeElapsed } from "@utils/dateUtils";
import { ListComponent } from "@appTypes/shared/components";
import { Currency } from "@appTypes/shared/money";

interface TicketPurchaseAmount {
  economy: number;
  standard: number;
  premium: number;
}

export const getFlightPurchaseListElement = (
  flight: Flight,
  purchasedTickets: TicketPurchaseAmount,
  selectedCurrency: Currency,
  selectedCurrencyRateBasedOnPLN?: number,
) => {
  const flightArrivalDate = getNextDateAfterTimeElapsed(
    new Date(flight.startingDate),
    flight.estimatedFlightTime,
  );

  const purchaseSummaryPricePLN =
    purchasedTickets.economy * flight.tickets.economy.price +
    purchasedTickets.standard * flight.tickets.standard.price +
    purchasedTickets.premium * flight.tickets.premium.price;

  const purchaseSummaryPriceInSelectedCurrencyVariant = `${(
    purchaseSummaryPricePLN / (selectedCurrencyRateBasedOnPLN || 1)
  ).toFixed(1)} ${selectedCurrency}`;

  const purchaseListElement: ListComponent[] = [
    {
      title: `Miasto startowe: ${flight.startingCity}`,
      icon: FlightTakeoffIcon,
    },
    {
      title: `Data wylotu: ${new Date(
        flight.startingDate,
      ).toLocaleDateString()}, ${new Date(
        flight.startingDate,
      ).toLocaleTimeString()}`,
      icon: TodayIcon,
    },
    {
      title: `Miasto docelowe: ${flight.destinationCity}`,
      icon: FlightLandIcon,
    },
    {
      title: `Data przylotu: ${flightArrivalDate.toLocaleDateString()}, ${flightArrivalDate.toLocaleTimeString()}`,
      icon: EventIcon,
    },
    {
      title: `Zakupione bilety: ${purchasedTickets.economy} x ekonomiczny, ${purchasedTickets.standard} x standard, ${purchasedTickets.premium} x premium`,
      icon: ReceiptIcon,
    },
    {
      title: `Łączny koszt: ${purchaseSummaryPriceInSelectedCurrencyVariant}`,
      icon: ShoppingCartIcon,
    },
  ];

  return purchaseListElement;
};
