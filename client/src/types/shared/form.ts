export interface OptionFormItem<T> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface StepperFormStep {
  label: string;
  component: React.ReactNode;
  disableNextStep?: boolean;
}

export interface SignupFormValues {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}
