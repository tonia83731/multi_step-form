type toggleSwitch_props = {
  onSwitchToggleChange: () => void;
  isChecked: boolean;
};

export default function ToggleSwitch(prop: toggleSwitch_props) {
  const { isChecked, onSwitchToggleChange } = prop;
  return (
    <label htmlFor="plan-switch" className="switch">
      <input
        type="checkbox"
        id="plan-switch"
        onChange={onSwitchToggleChange}
        checked={isChecked}
      />
      <span className="slider"></span>
    </label>
  );
}
