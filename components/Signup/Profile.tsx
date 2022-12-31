import { Input, Checkbox } from "@/common/Inputs";

interface ComponentProps {
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

const Component = ({ formData, onChange }: ComponentProps) => {
  return (
    <div className="mt-8 grid grid-cols-6 gap-2 md:gap-4 lg:gap-6">
      <Input
        type="text"
        validationText="Name field cannot be blank"
        label="Celebrity Crush"
        name="celeb"
        placeholder="Enter Name"
        min={1}
        half={false}
        onChange={onChange}
        value={formData ? formData.celeb : false}
      />
    </div>
  );
};

export default Component;
