import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";
import { useStyles } from "./styles";

export const TicketsPriceAndAvailability: React.FC = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Typography variant="h6" align="center">
        Dostępność biletów
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Klasa</TableCell>
            <TableCell align="center">Dostępne bilety</TableCell>
            <TableCell align="center">Cena pojedynczego biletu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="justify">Ekonomiczna</TableCell>
            <TableCell align="center">30</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={100} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standard</TableCell>
            <TableCell align="center">30</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={150} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Premium</TableCell>
            <TableCell align="center">30</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={200} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
