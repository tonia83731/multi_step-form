import { FormSteps } from "../../types/form.type";
import { useFormContext } from "../../context/FormContext";

type BtnG_props = {
  onPrevClick: (() => void) | undefined;
  onNextClick: () => void;
  isDisabled: boolean;
};

export default function ButtonGroup(prop: BtnG_props) {
  const { onPrevClick, onNextClick, isDisabled } = prop;
  const { step } = useFormContext();
  // console.log(step);
  return (
    <div
      className={`flex items-center ${
        step === FormSteps.PersonalInfo ? "justify-end" : "justify-between"
      }`}
    >
      {step !== FormSteps.PersonalInfo && (
        <button
          className="text-grey font-medium text-sm hover:text-denim active:text-denim md:text-base cursor-pointer"
          onClick={() => onPrevClick && onPrevClick()}
        >
          Go Back
        </button>
      )}
      <button
        className={`rounded px-4 py-2 font-medium text-white md:rounded-lg md:px-6 md:py-4 disabled:bg-grey ${
          step !== FormSteps.Summarize ? "bg-denim" : "bg-purple"
        }`}
        onClick={onNextClick}
        disabled={isDisabled}
      >
        {step !== FormSteps.Summarize ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
}
