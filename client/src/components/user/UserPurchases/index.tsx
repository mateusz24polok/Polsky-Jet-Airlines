import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import TodayIcon from "@material-ui/icons/Today";
import EventIcon from "@material-ui/icons/Event";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ListIconElement } from "@components/shared/ListIconElement";
import { ListComponent } from "@appTypes/shared/components";
import { useStyles } from "./styles";

export const UserPurchases: React.FC = () => {
  const classes = useStyles();

  const purchaseListElement: ListComponent[] = [
    { title: "Lotnisko startowe:", icon: FlightTakeoffIcon },
    { title: "Data wylotu:", icon: TodayIcon },
    { title: "Lotnisko docelowe:", icon: FlightLandIcon },
    { title: "Data przylotu:", icon: EventIcon },
    { title: "Zakupione bilety:", icon: ReceiptIcon },
    { title: "Łączny koszt:", icon: ShoppingCartIcon },
  ];

  return (
    <Paper>
      <Typography className={classes.title} align="center" variant="h5">
        Zamówienia
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
          <Typography>
            Zamówienie nr 5641fd5sfd65f165 [Bilety lotnicze]
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
    </Paper>
  );
};
