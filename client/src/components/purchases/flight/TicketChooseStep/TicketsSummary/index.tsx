import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";

export const TicketsSummary: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" align="center">
        Podsumowanie wyboru biletów
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Klasa</TableCell>
            <TableCell align="center">Szt. Wybranych biletów</TableCell>
            <TableCell align="center">Koszt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="justify">Ekonomiczna</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={200} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standard</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={300} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Premium</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={600} />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Podsumowanie kosztów</TableCell>
            <TableCell align="center">
              <GenericPriceText valuePLN={1100} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
