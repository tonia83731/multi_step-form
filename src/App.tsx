import AddOnSelect from "./components/AddOnSelect";
import PersonalInfo from "./components/PersonalInfo";
import PlanSelect from "./components/PlanSelect";
import Summarized from "./components/Summarized";
import Thankyou from "./components/Thankyou";
import StepButtonGroup from "./components/step/StepButtonGroup";
import { useFormContext } from "./context/FormContext";
import { FormSteps } from "./types/form.type";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  const { step } = useFormContext();

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
    <div className="md:rounded-[15px] md:w-11/12 md:max-w-[940px] md:h-full md:min-h-screen md:m-auto md:flex md:items-center">
      <div className="relative md:grid md:grid-cols-[274px_1fr] md:p-4 md:bg-white md:h-[600px]">
        <div className="relative w-full h-44 md:h-full">
          <img
            src={bgSidebarMobile}
            alt="bg-sidebar-mobile"
            className="w-full object-cover object-bottom md:hidden"
          />
          <img
            src={bgSidebarDesktop}
            alt="bg-sidebar-desktop"
            className="hidden md:block"
          />
          <div className="absolute top-8 left-1/2 translate-x-[-50%] md:left-8 md:translate-x-0 md:top-10">
            <StepButtonGroup />
          </div>
        </div>
        <div className="px-[100px] md:flex md:justify-center md:items-center">
          <div className="md:flex md:flex-col">{renderSteps()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
