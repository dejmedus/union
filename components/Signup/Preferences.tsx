import { Input, Checkbox } from "./Inputs";

interface PreferencesProps {
  formData: {
    name: string;
    username: string;
    email: string;
    mailingList: boolean;
    celeb: string;
    number: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Preferences = ({ formData, onChange }: PreferencesProps) => {
  return (
    <div className="mt-8 grid grid-cols-6 gap-2 md:gap-4 lg:gap-6">
      <Input
        type="text"
        validationText="Name field cannot be blank"
        label="Number"
        name="number"
        placeholder="Enter Number"
        min={1}
        half={false}
        onChange={onChange}
        value={formData ? formData.number : false}
      />
    </div>
  );
};

export default Preferences;
