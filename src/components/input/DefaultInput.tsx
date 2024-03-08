type DefaultInput_props = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DefaultInput(props: DefaultInput_props) {
  const { id, name, type, label, placeholder, inputValue, onInputChange } =
    props;
  return (
    <div className="flex flex-col mb-4 md:mb-6">
      <label htmlFor={id} className="text-demin text-xs">
        {label}
      </label>
      <input
        type={type}
        className="h-10 px-4 rounded border border-border-grey text-denim font-medium placeholder:text-grey placeholder:font-medium placeholder:text-[15px] focus:border-purple md:h-12 md:mt-3 md:rounded-lg"
        name={name}
        id={id}
        placeholder={`e.g. ${placeholder}`}
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
}
