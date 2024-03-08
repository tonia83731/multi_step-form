import { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { AddOnType, FormSteps, SelectedObj } from "../types/form.type";
import ButtonGroup from "./button/ButtonGroup";
import MainTitle from "./text/MainTitle";
import ToggleSwitch from "./input/ToggleSwitch";

export default function PlanSelect() {
  const { formData, setFormData, setStep, stepNum, setStepNum } =
    useFormContext();
  const [typeData, setTypeData] = useState<SelectedObj[]>(
    AddOnType[formData.plan]
  );
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-6 py-8 mx-auto unset">
        <MainTitle
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        <div className="mt-[22px] md:mt-10 md:mb-16 font-medium text-sm">
          <span className={isChecked === false ? "text-denim" : "text-grey"}>
            Monthly
          </span>
          <span className="mx-6">
            <ToggleSwitch
              isChecked={isChecked}
              onSwitchToggleChange={() => {
                setIsChecked(!isChecked);
                const plan = !isChecked === false ? "month" : "year";
                const planType = AddOnType[plan];
                setFormData({ ...formData, plan });
                setTypeData(planType);
              }}
            />
          </span>
          <span className={isChecked === true ? "text-denim" : "text-grey"}>
            Yearly
          </span>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 unset">
        <ButtonGroup
          onNextClick={() => {}}
          onPrevClick={() => {
            setStep(FormSteps.PersonalInfo);
            setStepNum(stepNum - 1);
          }}
          isDisabled={false}
        />
      </div>
    </>
  );
}
