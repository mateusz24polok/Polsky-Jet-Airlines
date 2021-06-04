import React from "react";
import { Box } from "@material-ui/core";

interface Props {
  iconCode: string;
  altDescription: string;
}

export const WeatherIcon: React.FC<Props> = ({ altDescription, iconCode }) => {
  const weatherIconLink = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <Box>
      <img src={weatherIconLink} alt={altDescription} />
    </Box>
  );
};
