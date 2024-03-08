import { useFormContext } from "../../context/FormContext";

type StepBtn_props = {
  number: number;
  title: string;
};

export default function StepButton(props: StepBtn_props) {
  const { stepNum } = useFormContext();
  const { number, title } = props;
  return (
    <div className="md:flex">
      <div
        className={`w-8 h-8 flex justify-center items-center text-sm rounded-full font-bold ${
          number === stepNum
            ? "text-denim bg-sky-blue"
            : "text-white border border-white"
        }`}
      >
        {number}
      </div>
      <div className="hidden ml-6 text-white md:block">
        <div className="text-xs">STEP {number}</div>
        <div className="text-sm font-bold uppercase">{title}</div>
      </div>
    </div>
  );
}
