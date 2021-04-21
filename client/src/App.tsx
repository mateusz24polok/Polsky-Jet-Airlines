import React, { useState } from "react";
import { getAirportService } from "./services/airports";

const App: React.FC = () => {
  const title = "Main component of POLSKY JET APP";
  const [airports, setAirports] = useState<any>(null);

  const handleGetDataFromApi = async (): Promise<void> => {
    const airports = await getAirportService();
    setAirports(airports.data);
  };

  return (
    <>
      <header>
        <h1 data-testid="header__title">{title}</h1>
        <h2>{process.env.name}</h2>
        <h3>Another h3 text for deploy testing</h3>
      </header>
      <main>
        <button onClick={handleGetDataFromApi}>Get Data From API</button>
        <ul>
          {airports ? (
            airports?.map((airport: any) => (
              <li key={airport._id}>{airport.airport}</li>
            ))
          ) : (
            <p>Click to get airports from backeng</p>
          )}
        </ul>
      </main>
    </>
  );
};

export default App;
