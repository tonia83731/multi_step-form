import { ReactNode } from "react";
import { useFormContext } from "../../context/FormContext";

type RadioInput_props = {
  id: string;
  title: string;
  price: number;
  type: string;
  children: ReactNode;
  selectValue: string;
  onRadioCheckChange: (title: string) => void;
};

export default function RadioInput(prop: RadioInput_props) {
  const { formData } = useFormContext();
  const { id, title, price, type, children, selectValue, onRadioCheckChange } =
    prop;
  return (
    <div className="md:w-full">
      <input
        type="radio"
        name="plan"
        id={id}
        className="hidden"
        checked={selectValue === title}
        onChange={() => onRadioCheckChange(title)}
      />
      <label
        htmlFor={id}
        className={`flex gap-2.5 rounded-lg border p-[18px] md:w-full md:h-40 md:p-4 md:flex-col md:justify-between cursor-pointer ${
          selectValue === title
            ? "border-purple bg-very-light-grey"
            : "border-grey bg-white"
        }`}
      >
        <div className="w-10 h-10">{children}</div>
        <div className="">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-grey mt-1">
            ${price}/{type}
          </div>
          {formData.plan === "year" && (
            <div className="font-denim text-xs mt-1">2 months free</div>
          )}
        </div>
      </label>
    </div>
  );
}
