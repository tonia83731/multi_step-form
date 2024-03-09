import { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { FormSteps, AddOnType, AddonObj } from "../types/form.type";
import ButtonGroup from "./button/ButtonGroup";
import MainTitle from "./text/MainTitle";
import CheckboxInput from "./input/CheckboxInput";

export default function AddOnSelect() {
  const {
    formData,
    setFormData,
    setStep,
    stepNum,
    setStepNum,
    totalPrice,
    setTotalPrice,
  } = useFormContext();
  const addOnData = AddOnType[formData.plan];
  // console.log(formData);
  const initialCheckedState = addOnData.map((addon) => {
    return formData.add_on.some((data) => data.id === addon.id);
  });
  const [isChecked, setIsCheck] = useState<boolean[]>(initialCheckedState);

  const renderAddOn = addOnData.map((data, index) => {
    return (
      <CheckboxInput
        id={data.id}
        key={data.id}
        name={data.id}
        title={data.type}
        description={data.description}
        type={formData.plan === "month" ? "mo" : "yr"}
        price={data.cost}
        isChecked={isChecked[index]}
        position={index}
        onCheckboxChange={(position) => {
          const updateCheckedState = isChecked.map((data, index) => {
            return index === position ? !data : data;
          });
          setIsCheck(updateCheckedState);
        }}
      />
    );
  });
  useEffect(() => {
    const updatedAddOns: AddonObj[] = [];

    isChecked.forEach((isChecked, index) => {
      if (isChecked) {
        updatedAddOns.push(addOnData[index]);
      }
    });

    setFormData({ ...formData, add_on: updatedAddOns });
  }, [isChecked]);
  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-4 py-8 mx-auto unset">
        <MainTitle
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />
        <div className="flex flex-col gap-3 my-6">{renderAddOn}</div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 unset">
        <ButtonGroup
          onNextClick={() => {
            let cost = 0;
            formData.add_on.forEach((data) => {
              cost += data.cost;
            });
            setTotalPrice(totalPrice + cost);
            setStep(FormSteps.Summarize);
            setStepNum(stepNum + 1);
          }}
          onPrevClick={() => {
            setStep(FormSteps.Plan);
            setStepNum(stepNum - 1);
          }}
          isDisabled={false}
        />
      </div>
    </>
  );
}
