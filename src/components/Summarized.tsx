import { useFormContext } from "../context/FormContext";
import MainTitle from "./text/MainTitle";
import ButtonGroup from "./button/ButtonGroup";
import {
  AddOnType,
  FormSteps,
  PlanType,
  SelectedObj,
} from "../types/form.type";
import { useEffect } from "react";

export default function Summarized() {
  const { formData, setFormData, setStep, stepNum, setStepNum, totalPrice } =
    useFormContext();
  // const [finalData, setFinalData] = useState(formData);
  const handlePlanSwitch = () => {
    const plan = formData.plan;
    const newPlan = plan === "month" ? "year" : "month";
    const filterPlanType = PlanType[newPlan].find(
      (data: SelectedObj) => data.type === formData.plan_type[0].type
    );
    const newPlanType = filterPlanType ? [filterPlanType] : [];

    const filterAddOn = AddOnType[newPlan].filter((data) =>
      formData.add_on.some((addon) => addon.type === data.type)
    );
    setFormData({
      ...formData,
      plan: newPlan,
      plan_type: newPlanType,
      add_on: filterAddOn,
    });
  };

  useEffect(() => {
    console.log("formData changed:", formData);
  }, [formData]);

  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-4 py-8 mx-auto unset">
        <MainTitle
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />
        <div className="bg-very-light-grey rounded-lg p-4 my-6">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-medium text-denim text-sm md:text-base">
                Arcade({formData.plan === "month" ? "Monthly" : "Yearly"})
              </h5>
              <button
                className="text-grey underline text-sm hover:text-purple active:text-purple"
                onClick={handlePlanSwitch}
              >
                Change
              </button>
            </div>
            <div className="font-bold text-sm text-denim md:text-base">
              ${formData.plan_type[0].cost}/
              {formData.plan === "month" ? "mo" : "yr"}
            </div>
          </div>
          <hr className="my-3 border-grey opacity-20" />
          <div>
            {formData.add_on.map((data, index) => {
              return (
                <div
                  key={data.id}
                  className={`text-sm flex justify-between items-center ${
                    index === formData.add_on.length - 1 ? "" : "mb-[18px]"
                  }`}
                >
                  <div className="text-grey">{data.type}</div>
                  <div className="text-demin">
                    +${data.cost}/{formData.plan === "month" ? "mo" : "yr"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="text-grey text-sm">Total (per ${formData.plan})</div>
          <div className="text-purple font-bold md:text-xl">
            +{totalPrice}/{formData.plan === "month" ? "mo" : "yr"}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 unset">
        <ButtonGroup
          onNextClick={() => {
            setStep(FormSteps.Thankyou);
          }}
          onPrevClick={() => {
            setStep(FormSteps.AddOn);
            setStepNum(stepNum - 1);
          }}
          isDisabled={false}
        />
      </div>
    </>
  );
}
