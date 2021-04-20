import React from "react";

const App: React.FC = () => {
  const title = "Main component of POLSKY JET APP";
  return (
    <header>
      <h1>
        {title} - {process.env.name}
      </h1>
    </header>
  );
};

export default App;
