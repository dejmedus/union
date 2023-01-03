import { Input, Checkbox, TextArea } from "@/common/Inputs";
import { Multi, MultiCheckbox } from "@/common/Multis";

interface ComponentProps {
  formData: {
    name: string;
    username: string;
    email: string;
    mailingList: boolean;
    celeb: string;
    number: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => void;
}

const Component = ({ formData, onChange }: ComponentProps) => {
  return (
    <div className="mt-8 grid grid-cols-6 gap-2 md:gap-4 lg:gap-6">
      <Input
        type="text"
        validationText="Please fill out your intro"
        label="Intro"
        name="intro"
        placeholder="Introduce Yourself"
        min={2}
        half={false}
        onChange={onChange}
        value={formData ? formData.intro : false}
      />
      <TextArea
        validationText="Bio must be at least 14 characters long"
        label="Bio"
        name="bio"
        placeholder="What should we know about you?"
        min={14}
        half={false}
        onChange={onChange}
        value={formData ? formData.bio : false}
      />
    </div>
  );
};

export default Component;
