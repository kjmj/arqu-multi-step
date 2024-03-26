import { FormContext } from "vee-validate";

export interface StepperStep {
  text: string;
  form?: FormContext;
  formId?: string;
}
