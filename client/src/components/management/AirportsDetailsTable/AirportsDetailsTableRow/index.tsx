import React from "react";
import { Grid, TableCell, TableRow } from "@material-ui/core";
import { getAirportFallbackImageOnImgError } from "@utils/imageUtils";
import { Image } from "@appTypes/shared/image";
import { Airport } from "@appTypes/airport";

interface Props extends Omit<Airport, "_id" | "airportPhoto"> {
  image: Image | string;
}

export const AirportDetailsTableRow: React.FC<Props> = ({
  image,
  airport,
  airportKey,
  city,
  continent,
  country,
  destinationPoint,
  startingPoint,
}) => {
  const renderAirportNameCell = (): JSX.Element => (
    <Grid>
      <img
        onError={getAirportFallbackImageOnImgError}
        src={image}
        width={100}
        alt={city}
      />
      <p>{`${airport} (${airportKey})`}</p>
    </Grid>
  );

  return (
    <TableRow>
      <TableCell align="center" component="th" scope="row">
        {renderAirportNameCell()}
      </TableCell>
      <TableCell align="center">{`${city}, ${country}`}</TableCell>
      <TableCell align="center">{continent}</TableCell>
      <TableCell align="center">{startingPoint ? "✔" : "❌"}</TableCell>
      <TableCell align="center">{destinationPoint ? "✔" : "❌"}</TableCell>
      {/* TODO: Unhide terminals in further versions */}
      {/* <TableCell align="center">{terminals.join(", ")}</TableCell> */}
    </TableRow>
  );
};
