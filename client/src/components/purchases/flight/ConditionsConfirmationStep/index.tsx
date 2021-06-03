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
import { CustomCheckbox } from "@components/shared/CustomCheckbox";
import { useStyles } from "./styles";

export const ConditionConfirmationStep: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h5" align="center">
        Podusmowanie zamówienia
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Początek Lotu</TableCell>
              <TableCell>Koniec Lotu</TableCell>
              <TableCell>Zamówione Bilety</TableCell>
              <TableCell>Koszt zamówienia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <p>Katowice</p>
                <p>Pyżowice (Pdofsj)</p>
                <p>24.05.2021 15:35</p>
              </TableCell>
              <TableCell>
                <p>Atlanta</p>
                <p>International Airport (Pdofsj)</p>
                <p>24.05.2021 20:35</p>
              </TableCell>
              <TableCell>
                <p>Klasa ekonomiczna: 5</p>
                <p>Klasa standard: 0</p>
                <p>Klasa premium: 0</p>
              </TableCell>
              <TableCell>
                <GenericPriceText valuePLN={500} />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <CustomCheckbox
                  // className={classes.checkbox}
                  name="confirmPurchase"
                  label="Potwierdź chęć zamówienia"
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
