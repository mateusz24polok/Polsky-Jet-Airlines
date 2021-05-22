import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Flight } from "@appTypes/flight";

type Props = Omit<Flight, "_id" | "status">;

export const FlightsDetailsTableRow: React.FC<Props> = ({
  startingCity,
  destinationCity,
  startingDate,
  startingAirport,
  destinationAirport,
  estimatedFlightTime,
  ticketsLeft,
}) => {
  const renderTicketsLeftCell = (): JSX.Element => (
    <>
      <p>{`Economy: ${ticketsLeft.economy}`}</p>
      <p>{`Standard: ${ticketsLeft.standard}`}</p>
      <p>{`Premium: ${ticketsLeft.premium}`}</p>
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
    </TableRow>
  );
};
