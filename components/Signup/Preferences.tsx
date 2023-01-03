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
      <Multi half={true} groupLabel="Your Partners Pronouns">
        <MultiCheckbox
          value={formData.gender["S"]}
          groupName="gender"
          onChange={onChange}
          name="S"
          label="she/her"
        />
        <MultiCheckbox
          value={formData.gender["H"]}
          groupName="gender"
          onChange={onChange}
          name="H"
          label="he/him"
        />
        <MultiCheckbox
          value={formData.gender["T"]}
          groupName="gender"
          onChange={onChange}
          name="T"
          label="they/them"
        />
        <MultiCheckbox
          value={formData.gender["O"]}
          groupName="gender"
          onChange={onChange}
          name="O"
          label="other"
        />
      </Multi>
    </div>
  );
};

export default Preferences;
