import React from "react";

const App: React.FC = () => {
  const title = "Main component of POLSKY JET APP";
  return (
    <header>
      <h1 data-testid="header__title">{title}</h1>
      <h2>{process.env.name}</h2>
    </header>
  );
};

export default App;
