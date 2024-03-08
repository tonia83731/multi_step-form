import AddOnSelect from "./components/AddOnSelect";
import PersonalInfo from "./components/PersonalInfo";
import PlanSelect from "./components/PlanSelect";
import Summarized from "./components/Summarized";
import Thankyou from "./components/Thankyou";
import StepButtonGroup from "./components/step/StepButtonGroup";
import { useFormContext } from "./context/FormContext";
import { FormSteps } from "./types/form.type";

function App() {
  const { step, setStep, setStepNum } = useFormContext();

  const renderSteps = () => {
    switch (step) {
      case FormSteps.PersonalInfo:
        return <PersonalInfo />;
      case FormSteps.Plan:
        return <PlanSelect />;
      case FormSteps.AddOn:
        return <AddOnSelect />;
      case FormSteps.Summarize:
        return <Summarized />;
      case FormSteps.Thankyou:
        return <Thankyou />;
      default:
        return null;
    }
  };
  return (
    <>
      <StepButtonGroup />
      {renderSteps()}
    </>
  );
}

export default App;
