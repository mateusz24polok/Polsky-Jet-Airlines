import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAirports } from "@store/slices/airports";

export const AirportsDetailsTable: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAirports());
  }, [dispatch]);
  return (
    <div>
      <h1>Here will be AirportsDetailsTable component</h1>
    </div>
  );
};
