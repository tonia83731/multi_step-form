import { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { FormSteps } from "../types/form.type";
import ButtonGroup from "./button/ButtonGroup";
import DefaultInput from "./input/DefaultInput";
import MainTitle from "./text/MainTitle";

interface IErrorMessage {
  name: string;
  email: string;
  phone: string;
}

export default function PersonalInfo() {
  const { formData, setFormData, setStep, stepNum, setStepNum } =
    useFormContext();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    name: "",
    email: "",
    phone: "",
  });
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  useEffect(() => {
    if (
      !formData.name ||
      formData.name.trim() === "" ||
      !formData.email ||
      formData.email.trim() === "" ||
      !formData.phone ||
      formData.phone.trim() === ""
    ) {
      setIsDisabled(true);
      return;
    }
    setIsDisabled(false);
  }, [formData]);
  useEffect(() => {
    if (formData.email.includes("@")) {
      setErrorMessage({ ...errorMessage, email: "" });
    }
    if (phoneRegex.test(formData.phone)) {
      setErrorMessage({ ...errorMessage, phone: "" });
    }
  }, [formData]);
  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-6 py-8 mx-auto unset">
        <MainTitle
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <div className="mt-[22px] md:mt-10 md:mb-16">
          <DefaultInput
            id="form-name"
            name="name"
            type="text"
            label="Name"
            placeholder="Stephen King"
            inputValue={formData.name}
            error={errorMessage.name}
            onInputChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <DefaultInput
            id="form-email"
            name="email"
            type="text"
            label="Email Address"
            placeholder="stephenking@lorem.com"
            inputValue={formData.email}
            error={errorMessage.email}
            onInputChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <DefaultInput
            id="form-phone"
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="+1 237 567 890"
            inputValue={formData.phone}
            error={errorMessage.phone}
            onInputChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 unset">
        <ButtonGroup
          onNextClick={() => {
            if (!formData.email.includes("@")) {
              setErrorMessage({
                ...errorMessage,
                email: "Invalid email",
              });
              return;
            }
            if (!phoneRegex.test(formData.phone)) {
              setErrorMessage({
                ...errorMessage,
                phone: "Invalid phone number",
              });
              return;
            }

            setStep(FormSteps.Plan);
            setStepNum(stepNum + 1);
          }}
          onPrevClick={undefined}
          isDisabled={isDisabled}
        />
      </div>
    </>
  );
}
