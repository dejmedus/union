import { useState } from "react";
import SignupSteps from "@/components/SignupSteps";
import Account from "@/components/StepAccount";
import Preferences from "@/components/StepPreferences";

const signup = () => {
  return <Signup />;
};

function Signup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [accountDetails, setAccountDetails] = useState([]);

  const genericProps = {
    currentStep: currentStep,
    setCurrentStep: setCurrentStep,
    accountDetails: accountDetails,
    setAccountDetails: setAccountDetails,
  };

  console.log(currentStep);
  console.log(accountDetails[currentStep]);

  const stepPage = [
    <Account key="account" {...genericProps} />,
    <Preferences key="preferences" {...genericProps} />,
  ];

  return (
    <>
      <SignupSteps currentStep={currentStep} />

      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:py-4 lg:px-16 xl:col-span-6"
      >
        {stepPage[currentStep]}
      </main>
    </>
  );
}

export default signup;
