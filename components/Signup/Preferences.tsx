import { Input, Checkbox } from "@/common/Inputs";
import { Multi, MultiCheckbox, MultiRadio } from "@/common/Multis";
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

      <Multi half={true} groupLabel="Partners pronouns">
        <MultiCheckbox
          value={formData.genderPref["s"]}
          groupName="genderPref"
          onChange={onChange}
          name="s"
          label="she/her"
        />
        <MultiCheckbox
          value={formData.genderPref["h"]}
          groupName="genderPref"
          onChange={onChange}
          name="h"
          label="he/him"
        />
        <MultiCheckbox
          value={formData.genderPref["t"]}
          groupName="genderPref"
          onChange={onChange}
          name="t"
          label="they/them"
        />
        <MultiCheckbox
          value={formData.genderPref["o"]}
          groupName="genderPref"
          onChange={onChange}
          name="o"
          label="other"
        />
      </Multi>
    </div>
  );
};

export default Preferences;
