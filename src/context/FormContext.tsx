import { createContext, useContext, useState, ReactNode } from "react";
import { FormSteps, IFormItems } from "../types/form.type";

interface IFormContextProps {
  formData: IFormItems;
  setFormData: (data: IFormItems) => void;
  step: FormSteps;
  setStep: (data: FormSteps) => void;
  stepNum: number;
  setStepNum: (data: number) => void;
}

type FormContext_props = {
  children: ReactNode;
};

const FormContext = createContext<IFormContextProps | null>(null);

export const useFormContext = () => {
  const formContext = useContext(FormContext);
  if (!formContext) throw new Error("No context!");
  return formContext;
};

export const FormContextProvider = (props: FormContext_props) => {
  const { children } = props;
  const [formData, setFormData] = useState<IFormItems>({
    name: "",
    email: "",
    phone: "",
    plan: "month",
    plan_type: [],
    add_on: [],
  });
  const [step, setStep] = useState<FormSteps>(FormSteps.PersonalInfo);
  const [stepNum, setStepNum] = useState<number>(1);

  return (
    <FormContext.Provider
      value={{ formData, setFormData, step, setStep, stepNum, setStepNum }}
    >
      {children}
    </FormContext.Provider>
  );
};
