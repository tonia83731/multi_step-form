import { useFormContext } from "../context/FormContext";
import ButtonGroup from "./button/ButtonGroup";
import DefaultInput from "./input/DefaultInput";
import MainTitle from "./text/MainTitle";

export default function PersonalInfo() {
  const { formData, setFormData } = useFormContext();
  return (
    <>
      <MainTitle
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <div className="mt-[22px] md:mt-10">
        <DefaultInput
          id="form-name"
          name="name"
          type="text"
          label="Name"
          placeholder="Stephen King"
          inputValue={formData.name}
          onInputChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <DefaultInput
          id="form-email"
          name="email"
          type="text"
          label="Email Address"
          placeholder="stephenking@lorem.com"
          inputValue={formData.email}
          onInputChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <DefaultInput
          id="form-phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="+1 237 567 890"
          inputValue={formData.phone}
          onInputChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
      </div>
      <ButtonGroup />
    </>
  );
}
