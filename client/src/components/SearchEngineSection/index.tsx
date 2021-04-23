import React from "react";
import { useStyles } from "./styles";

export const SearchEngineSection: React.FC = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.root}>{children}</section>;
};
