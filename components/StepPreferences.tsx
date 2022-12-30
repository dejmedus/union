import Link from "next/link";
import { Input } from "@/components/Inputs";
import { useState } from "react";

interface PreferencesProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  accountDetails: object[];
  setAccountDetails: React.Dispatch<React.SetStateAction<object[]>>;
}

export default function Preferences({
  currentStep,
  setCurrentStep,
  accountDetails,
  setAccountDetails,
}: PreferencesProps) {
  const [formData, setFormData] = useState(
    accountDetails[currentStep] ? accountDetails[currentStep] : {}
  );

  // if there is new formData set it to accountDetails index currentStep
  const nextStep = () => {
    if (Object.keys(formData).length !== 0) {
      setAccountDetails((current) => [formData, ...current.slice(1)]);
    }
    currentStep < 3 && setCurrentStep((current) => current + 1);
  };

  const backStep = () => {
    if (Object.keys(formData).length !== currentStep) {
      setAccountDetails((current) => [formData, ...current.slice(1)]);
    }
    currentStep < 3 && setCurrentStep((current) => current - 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type == "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <div className=" max-w-xl lg:max-w-3xl">
      <h1 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl">
        Preferences
      </h1>

      <div className="mt-8 grid grid-cols-6 gap-6">
        <Input
          type="text"
          validationText="Name field cannot be blank"
          label="Name"
          name="name"
          placeholder="Enter Name"
          min={1}
          half={true}
          onChange={onChange}
          value={
            accountDetails[currentStep]
              ? accountDetails[currentStep].name
              : false
          }
        />

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            onClick={backStep}
            className="inline-block shrink-0 rounded-md bg-blue-400 border border-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500 disabled:border-zinc-400 disabled:bg-zinc-400 disabled:text-zinc-300 hover:disabled:text-zinc-300 hover:disabled:bg-zinc-400"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="inline-block shrink-0 rounded-md bg-blue-400 border border-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500 disabled:border-zinc-400 disabled:bg-zinc-400 disabled:text-zinc-300 hover:disabled:text-zinc-300 hover:disabled:bg-zinc-400"
            // disabled={
            //   // if name, username, and email have not been filled out, button cannot be clicked
            //   !formData.name || !formData.username || !formData.email
            // }
          >
            Next Step &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
