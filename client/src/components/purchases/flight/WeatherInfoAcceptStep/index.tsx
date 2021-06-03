import React from "react";
import { CustomCheckbox } from "@components/shared/CustomCheckbox";

export const WeatherInfoAcceptStep: React.FC = () => {
  return (
    <>
      <h1>First Step - Weather Accept</h1>
      <h2>Please accept the weather on the following checkbox</h2>
      <h3>
        Here will be content of weather accept component in the near future
      </h3>
      <CustomCheckbox
        // className={classes.checkbox}
        name="weatherInfoAccept"
        label="Zaakceptuj warunki pogodowe"
      />
    </>
  );
};
