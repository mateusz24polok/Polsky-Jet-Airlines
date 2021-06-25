import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form as FormikForm } from "formik";
import { Box } from "@material-ui/core";
import { SuccessfulPurchasePage } from "@pages/SuccessfulPurchasePage";
import { IncorrectFlightNumberPage } from "@pages/IncorrectFlightNumberPage";
import { MultiStepperForm } from "@components/shared/MultiStepperForm";
import { WeatherInfoAcceptStep } from "@components/purchases/flight/WeatherInfoAcceptStep";
import { TicketChooseStep } from "@components/purchases/flight/TicketChooseStep";
import { ConditionConfirmationStep } from "@components/purchases/flight/ConditionsConfirmationStep";
import {
  fetchFlights,
  selectFlightById,
  selectFlights,
} from "@store/slices/flights";
import { addPurchase, selectUserId } from "@store/slices/user";
import { RootState } from "@store/setupStore";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { StepperFormStep } from "@appTypes/shared/form";
import {
  FlightTicketPurchaseFormValues,
  FlightTicketPurchaseRequest,
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
  const mediumBreakpointsMatches = useMediumBrekpointMatchesUp();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const flights = useSelector(selectFlights);
  const flight = useSelector((state: RootState) =>
    selectFlightById(state, flightId),
  );
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  useEffect(() => {
    if (flights.length === 0) {
      dispatch(fetchFlights());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (flight) {
    const { tickets } = flight;
    return !isPurchaseCompleted ? (
      <Formik
        enableReinitialize={true}
        initialValues={formInitialValues}
        onSubmit={values => {
          if (userId) {
            const flightTicketPurchaseRequest: FlightTicketPurchaseRequest = {
              purchaseType: values.purchaseType,
              flight: flightId,
              confirmPurchase: values.confirmPurchase,
              weatherInfoAccept: values.weatherInfoAccept,
              orderingUser: userId,
              purchasedTickets: {
                economy: values.economyTickets,
                standard: values.standardTickets,
                premium: values.premiumTickets,
              },
            };
            setIsPurchaseCompleted(true);
            dispatch(addPurchase(flightTicketPurchaseRequest));
          }
        }}
      >
        {({ submitForm, values }) => {
          const TicketChooseStepPassCondition =
            (values.economyTickets === 0 &&
              values.standardTickets === 0 &&
              values.premiumTickets === 0) ||
            values.economyTickets < 0 ||
            values.economyTickets > tickets.economy.amount ||
            values.standardTickets < 0 ||
            values.standardTickets > tickets.standard.amount ||
            values.premiumTickets < 0 ||
            values.premiumTickets > tickets.premium.amount ||
            typeof values.economyTickets !== "number" ||
            typeof values.standardTickets !== "number" ||
            typeof values.premiumTickets !== "number";

          const steps: StepperFormStep[] = [
            {
              label: "Potwierdzenie warunków pogodowych",
              component: (
                <WeatherInfoAcceptStep flightId={flightId} flights={flights} />
              ),
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
              disableNextStep: TicketChooseStepPassCondition,
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
              <Box mb={mediumBreakpointsMatches ? 8 : 2}>
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
    ) : (
      <SuccessfulPurchasePage />
    );
  }

  return <IncorrectFlightNumberPage flightId={flightId} />;
};
