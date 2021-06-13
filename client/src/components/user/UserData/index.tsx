import React from "react";
import { List, Paper, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ListIconElement } from "@components/shared/ListIconElement";
import { UserRole } from "@appTypes/user";
import { ListComponent } from "@appTypes/shared/components";
import { useStyles } from "./styles";

interface Props {
  userName: string;
  userEmail: string;
  userPurchases: number;
  userRole: UserRole;
}

export const UserData: React.FC<Props> = ({
  userEmail,
  userName,
  userPurchases,
  userRole,
}) => {
  const classes = useStyles();

  const userDataIconList: ListComponent[] = [
    { title: `Nazwa użytkownika: ${userName}`, icon: AccountCircleIcon },
    { title: `Email: ${userEmail}`, icon: EmailIcon },
    { title: `Rola: ${userRole}`, icon: FaceIcon },
    { title: `Liczba zamówień: ${userPurchases}`, icon: ShoppingCartIcon },
  ];

  return (
    <Paper>
      <Typography className={classes.title} align="center" variant="h5">
        Dane klienta
      </Typography>
      <List>
        {userDataIconList.map(listElement => (
          <ListIconElement key={listElement.title} iconElement={listElement} />
        ))}
      </List>
    </Paper>
  );
};
