import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { MultiStepperForm } from "@components/shared/MultiStepperForm";
import { WeatherInfoAcceptStep } from "@components/purchases/flight/WeatherInfoAcceptStep";
import { TicketChooseStep } from "@components/purchases/flight/TicketChooseStep";
import { ConditionConfirmationStep } from "@components/purchases/flight/ConditionsConfirmationStep";
import { StepperFormStep } from "@appTypes/shared/form";
import {
  FlightTicketPurchaseFormValues,
  PurchaseType,
} from "@appTypes/purchases";
import { Box } from "@material-ui/core";

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
  console.log("Flight id z propsów wyżej", flightId);

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
            component: <WeatherInfoAcceptStep />,
            disableNextStep: !values.weatherInfoAccept,
          },
          {
            label: "Wybór biletów",
            component: <TicketChooseStep />,
          },
          {
            label: "Potwierdzenie zamówienia",
            component: <ConditionConfirmationStep />,
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
};
