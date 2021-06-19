import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { GenericPriceText } from "@components/shared/GenericPriceText";
import { Flight } from "@appTypes/flight";

type Props = Omit<Flight, "_id" | "status" | "weather">;

export const FlightsDetailsTableRow: React.FC<Props> = ({
  startingCity,
  destinationCity,
  startingDate,
  startingAirport,
  destinationAirport,
  estimatedFlightTime,
  tickets,
}) => {
  const renderTicketsLeftCell = (): JSX.Element => (
    <>
      <p>{`Economy: ${tickets.economy.amount}`}</p>
      <p>{`Standard: ${tickets.standard.amount}`}</p>
      <p>{`Premium: ${tickets.premium.amount}`}</p>
    </>
  );

  const renderTicketsPricesCell = (): JSX.Element => (
    <>
      <p>
        Economy: <GenericPriceText valuePLN={tickets.economy.price} />
      </p>
      <p>
        Standard: <GenericPriceText valuePLN={tickets.standard.price} />
      </p>
      <p>
        Premium: <GenericPriceText valuePLN={tickets.premium.price} />
      </p>
    </>
  );

  const renderFlightDateCell = (): JSX.Element => {
    const flightDate = new Date(startingDate).toLocaleDateString();
    const flightTime = new Date(startingDate).toLocaleTimeString();

    return (
      <>
        <p>{flightDate}</p>
        <p>{flightTime}</p>
      </>
    );
  };

  return (
    <TableRow>
      <TableCell align="center" component="th" scope="row">
        {`${startingCity} ✈ ${destinationCity}`}
      </TableCell>
      <TableCell align="center">{renderFlightDateCell()}</TableCell>
      <TableCell align="center">{startingAirport.airport}</TableCell>
      <TableCell align="center">{destinationAirport.airport}</TableCell>
      <TableCell align="center">{estimatedFlightTime}</TableCell>
      <TableCell align="center">{renderTicketsLeftCell()}</TableCell>
      <TableCell align="center">{renderTicketsPricesCell()}</TableCell>
    </TableRow>
  );
};
