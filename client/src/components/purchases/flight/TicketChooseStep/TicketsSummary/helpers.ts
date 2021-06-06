export const getSelectedTicketAmountTextContent = (
  amountSelectedTickets: number | null,
): string => {
  return typeof amountSelectedTickets === "number" && amountSelectedTickets > 0
    ? String(amountSelectedTickets)
    : "-";
};

export const getSelectedTicketSummaryValue = (
  amountSelectedTickets: number | null,
  ticketPrice: number,
): number => {
  return typeof amountSelectedTickets === "number" && amountSelectedTickets > 0
    ? amountSelectedTickets * ticketPrice
    : 0;
};
