import { FormSteps } from "../../types/form.type";
import { useFormContext } from "../../context/FormContext";

type BtnG_props = {
  onPrevClick: () => void;
  onNextClick: () => void;
};

export default function ButtonGroup(prop: BtnG_props) {
  const { onPrevClick, onNextClick } = prop;
  const { step } = useFormContext();
  return (
    <div className="">
      {step !== FormSteps.PersonalInfo && (
        <button
          className="text-grey font-medium text-sm hover:text-denim active:text-denim md:text-base cursor-pointer"
          onClick={onPrevClick}
        >
          Go Back
        </button>
      )}
      <button
        className={`rounded px-4 py-2 font-medium text-white md:rounded-lg md:px-6 md:py-4 ${
          step !== FormSteps.Summarize ? "bg-denim" : "bg-purple"
        }`}
        onClick={onNextClick}
      >
        {step !== FormSteps.Summarize ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
}
