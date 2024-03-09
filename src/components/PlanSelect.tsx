import { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { FormSteps, PlanType, SelectedObj } from "../types/form.type";
import ButtonGroup from "./button/ButtonGroup";
import MainTitle from "./text/MainTitle";
import ToggleSwitch from "./input/ToggleSwitch";
import RadioInput from "./input/RadioInput";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

export default function PlanSelect() {
  const { formData, setFormData, setStep, stepNum, setStepNum, setTotalPrice } =
    useFormContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const [typeData, setTypeData] = useState<SelectedObj[]>(
    PlanType[formData.plan]
  );
  const [isChecked, setIsChecked] = useState(false);
  const initialData =
    formData.plan_type.length === 0 ? "" : formData.plan_type[0].type;
  const [selectValue, setSelectValue] = useState(initialData);
  const randerOption = typeData.map((data, index) => {
    return (
      <RadioInput
        key={data.type}
        id={data.type}
        title={data.type}
        price={data.cost}
        type={formData.plan === "month" ? "mo" : "yr"}
        selectValue={selectValue}
        onRadioCheckChange={(title) => {
          const filterData = typeData.filter((data) => data.type === title);
          setTotalPrice(filterData[0].cost);
          setSelectValue(title);
          setFormData({ ...formData, plan_type: filterData });
        }}
      >
        <img
          src={index === 0 ? ArcadeIcon : index === 1 ? AdvancedIcon : ProIcon}
          alt={data.type}
          className=""
        />
      </RadioInput>
    );
  });

  // console.log(selectValue);
  useEffect(() => {
    if (formData.plan_type.length !== 0 || selectValue !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData, selectValue]);

  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-4 py-8 mx-auto unset">
        <MainTitle
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        <div className="flex flex-col gap-3 my-6 md:flex-row md:gap-[18px] md:grid md:grid-cols-3">
          {randerOption}
        </div>
        <div className="mt-[22px] font-medium text-sm bg-very-light-grey rounded-lg py-4 flex justify-center item-center md:mt-10 md:mb-16">
          <span className={isChecked === false ? "text-denim" : "text-grey"}>
            Monthly
          </span>
          <span className="mx-6">
            <ToggleSwitch
              isChecked={isChecked}
              onSwitchToggleChange={() => {
                setIsChecked(!isChecked);
                const plan = !isChecked === false ? "month" : "year";
                const planType = PlanType[plan];
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
          onNextClick={() => {
            if (formData.plan_type.length === 0 || selectValue === "") {
              setIsDisabled(true);
              return;
            }
            setStep(FormSteps.AddOn);
            setStepNum(stepNum + 1);
          }}
          onPrevClick={() => {
            setStep(FormSteps.PersonalInfo);
            setStepNum(stepNum - 1);
          }}
          isDisabled={isDisabled}
        />
      </div>
    </>
  );
}
