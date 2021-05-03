import { Money } from "@appTypes/shared/money";

export enum TicketStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  BLOCKED = "BLOCKED",
  WITHDRAWN = "WITHDRAWN",
}

export enum TicketClass {
  ECONOMY = "ECONOMY",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}

export interface Ticket {
  status: TicketStatus;
  price: Money;
  class: TicketClass;
  airplanePosition: string;
}
