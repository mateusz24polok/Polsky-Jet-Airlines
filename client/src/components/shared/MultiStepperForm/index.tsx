import React, { useCallback, useState } from "react";
import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { StepperFormStep } from "@appTypes/shared/form";
import { useStyles } from "./styles";

interface Props {
  backButtonLabel?: string;
  nextButtonLabel?: string;
  finishButtonLabel?: string;
  steps: StepperFormStep[];
  onStepperFinish: () => void;
}

export const MultiStepperForm: React.FC<Props> = ({
  backButtonLabel,
  nextButtonLabel,
  finishButtonLabel,
  onStepperFinish,
  steps,
}) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleFinish = useCallback(onStepperFinish, [onStepperFinish]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(step => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          {steps[activeStep].component}
          <div className={classes.buttonsGroup}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              {backButtonLabel || "Back"}
            </Button>
            <Button
              disabled={steps[activeStep].disableNextStep}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1
                ? finishButtonLabel || "Finish"
                : nextButtonLabel || "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
