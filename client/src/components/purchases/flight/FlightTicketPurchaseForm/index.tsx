import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form as FormikForm } from "formik";
import { Box, Typography } from "@material-ui/core";
import { MultiStepperForm } from "@components/shared/MultiStepperForm";
import { WeatherInfoAcceptStep } from "@components/purchases/flight/WeatherInfoAcceptStep";
import { TicketChooseStep } from "@components/purchases/flight/TicketChooseStep";
import { ConditionConfirmationStep } from "@components/purchases/flight/ConditionsConfirmationStep";
import { selectFlightById } from "@store/slices/flights";
import { RootState } from "@store/setupStore";
import { StepperFormStep } from "@appTypes/shared/form";
import {
  FlightTicketPurchaseFormValues,
  PurchaseType,
} from "@appTypes/purchases";

interface Props {
  flightId: string;
}

const formInitialValues: FlightTicketPurchaseFormValues = {
  purchaseType: PurchaseType.FLIGHT,
  weatherInfoAccept: false,
  economyTickets: 1,
  standardTickets: 0,
  premiumTickets: 0,
  confirmPurchase: false,
};

export const FlightTicketPurchaseForm: React.FC<Props> = ({ flightId }) => {
  const flight = useSelector((state: RootState) =>
    selectFlightById(state, flightId),
  );
  if (flight) {
    return (
      <Formik
        enableReinitialize={true}
        initialValues={formInitialValues}
        onSubmit={values => {
          console.log({ flightId, ...values });
        }}
      >
        {({ submitForm, values }) => {
          const steps: StepperFormStep[] = [
            {
              label: "Potwierdzenie warunków pogodowych",
              component: <WeatherInfoAcceptStep flightId={flightId} />,
              disableNextStep: !values.weatherInfoAccept,
            },
            {
              label: "Wybór biletów",
              component: (
                <TicketChooseStep
                  flight={flight}
                  amountSelectedEconomyTickets={values.economyTickets}
                  amountSelectedPremiumTickets={values.premiumTickets}
                  amountSelectedStandardTickets={values.standardTickets}
                />
              ),
              disableNextStep:
                values.economyTickets === 0 &&
                values.standardTickets === 0 &&
                values.premiumTickets === 0,
            },
            {
              label: "Potwierdzenie zamówienia",
              component: (
                <ConditionConfirmationStep
                  flight={flight}
                  amountSelectedEconomyTickets={values.economyTickets}
                  amountSelectedPremiumTickets={values.premiumTickets}
                  amountSelectedStandardTickets={values.standardTickets}
                />
              ),
              disableNextStep: !values.confirmPurchase,
            },
          ];
          return (
            <FormikForm>
              <Box mb={8}>
                <MultiStepperForm
                  steps={steps}
                  onStepperFinish={submitForm}
                  finishButtonLabel="Zamów"
                  nextButtonLabel="Dalej"
                  backButtonLabel="Cofnij"
                />
              </Box>
            </FormikForm>
          );
        }}
      </Formik>
    );
  }

  return <Typography>Wybrany lot nie istnieje w bazie PolskyJet</Typography>;
};
