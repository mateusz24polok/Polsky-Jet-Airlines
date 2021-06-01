import { TicketData, Tickets } from "@appTypes/flight";

export const getFlightCheapestTicketPrice = (ticket: Tickets): number => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ticketObjectValues: TicketData[] = Object.values(ticket);
  const ticketPrices = ticketObjectValues.map(
    ticketObjectValue => ticketObjectValue.price,
  );

  return Math.min(...ticketPrices);
};

export const getFlightFreeTickets = (ticket: Tickets): number => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ticketObjectValues: TicketData[] = Object.values(ticket);
  const freeTicketsInEachClass = ticketObjectValues.map(
    ticketObjectValue => ticketObjectValue.amount,
  );

  const freeTickets = freeTicketsInEachClass.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue;
    },
    0,
  );

  return freeTickets;
};
