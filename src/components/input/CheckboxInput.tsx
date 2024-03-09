type CheckInput_props = {
  id: string;
  position: number;
  title: string;
  price: number;
  name: string;
  description: string;
  type: string;
  isChecked: boolean;
  onCheckboxChange: (position: number, id: string) => void;
};

export default function CheckboxInput(prop: CheckInput_props) {
  const {
    id,
    name,
    title,
    description,
    price,
    type,
    isChecked,
    position,
    onCheckboxChange,
  } = prop;
  return (
    <div className="flex gap-5 items-center">
      <input
        type="checkbox"
        className="flex-grow w-5 h-5 rounded border border-border-grey accent-purple"
        name={name}
        id={id}
        value={id}
        checked={isChecked === true}
        onChange={() => onCheckboxChange(position, id)}
      />
      <label htmlFor={id} className="w-full flex justify-between items-center">
        <div className="">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-grey mt-1">{description}</div>
        </div>
        <div className="text-sm text-purple">
          +${price}/{type}
        </div>
      </label>
    </div>
  );
}
