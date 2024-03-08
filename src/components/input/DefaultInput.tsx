type DefaultInput_props = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  inputValue: string;
  error: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DefaultInput(props: DefaultInput_props) {
  const {
    id,
    name,
    type,
    label,
    placeholder,
    inputValue,
    error,
    onInputChange,
  } = props;
  return (
    <div className="flex flex-col mb-4 md:mb-6">
      <div className="flex justify-between items-center text-xs">
        <label htmlFor={id} className="text-demin">
          {label}
        </label>
        {error !== "" && <div className="text-red-500 font-bold">{error}</div>}
      </div>
      <input
        type={type}
        className={`h-10 px-4 rounded border ${
          error !== "" ? "border-red-500" : "border-border-grey"
        } text-denim font-medium placeholder:text-grey placeholder:font-medium placeholder:text-[15px] focus:border-purple md:h-12 md:mt-3 md:rounded-lg`}
        name={name}
        id={id}
        placeholder={`e.g. ${placeholder}`}
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
}
