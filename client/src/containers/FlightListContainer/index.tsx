import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

export const FlightListContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};
