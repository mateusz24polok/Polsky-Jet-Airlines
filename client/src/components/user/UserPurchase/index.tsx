import React from "react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ListIconElement } from "@components/shared/ListIconElement";
import {
  selectSelectedCurrency,
  selectSelectedCurrencyRateBasedOnPLN,
} from "@store/slices/currencies";
import { IPurchase } from "@appTypes/purchases";
import { getFlightPurchaseListElement } from "./helpers";

interface Props {
  purchase: IPurchase;
}

export const UserPurchases: React.FC<Props> = ({ purchase }) => {
  const { flight, purchasedTickets } = purchase;

  const selectedCurrency = useSelector(selectSelectedCurrency);
  const selectedCurrencyRateBasedOnPLN = useSelector(
    selectSelectedCurrencyRateBasedOnPLN,
  );

  const purchaseListElement =
    flight && purchasedTickets
      ? getFlightPurchaseListElement(
          flight,
          purchasedTickets,
          selectedCurrency,
          selectedCurrencyRateBasedOnPLN,
        )
      : [];

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography>
          Zamówienie nr {purchase._id} [{purchase.purchaseType}]
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {purchaseListElement.map(purchaseIconElement => (
            <ListIconElement
              key={purchaseIconElement.title}
              iconElement={purchaseIconElement}
            />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
