import StepButton from "./StepButton";

export default function StepButtonGroup() {
  return (
    <div className="flex justify-center items-center gap-4 md:flex-col md:items-start md:gap-7">
      <StepButton number={1} title="YOUR INFO" />
      <StepButton number={2} title="SELECT PLAN" />
      <StepButton number={3} title="ADD-ONS" />
      <StepButton number={4} title="SUMMARY" />
    </div>
  );
}
