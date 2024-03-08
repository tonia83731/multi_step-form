import { createContext, useContext, useState, ReactNode } from "react";
import { IFormItems } from "../types/form.type";

interface IFormContextProps {
  formData: IFormItems;
  setFormData: (data: IFormItems) => void;
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

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
