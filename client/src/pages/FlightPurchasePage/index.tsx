import React from "react";
import { useParams } from "react-router-dom";

export const FlightPurchasePage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const flightId = params.id;

  return (
    <div>
      <h1>Flight Purchase Page regarding flight with id {flightId}</h1>
    </div>
  );
};
