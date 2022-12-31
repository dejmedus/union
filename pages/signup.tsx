import { useState } from "react";
import Link from "next/link";
import SignupSteps from "@/components/SignupSteps";

import Account from "@/components/StepAccount";
import Profile from "@/components/StepProfile";
import Preferences from "@/components/StepPreferences";

const signup = () => {
  return <Signup />;
};

function Signup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [accountDetails, setAccountDetails] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type == "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const genericProps = {
    accountDetails: accountDetails,
    onChange: onChange,
  };

  // form pages
  const steps = ["Account", "Profile", "Preferences", "Photos", "Confirmation"];
  const stepDetails = [
    {
      name: "Welcome to Union",
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.`,
      component: (
        <Account
          key="account"
          {...genericProps}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      ),
    },
    {
      name: "Profile",
      body: null,
      component: <Profile key="profile" {...genericProps} />,
    },
    {
      name: "Preferences",
      body: null,
      component: <Preferences key="Account" {...genericProps} />,
    },
    // {
    //   name: "Preferences",
    //   body: null,
    //   initialInputsObj: {
    //     name: "",
    //   },
    //   component: (
    //     <StepInner key="Account" {...genericProps} />
    //   ),
    // },
  ];

  const [formData, setFormData] = useState(accountDetails);

  // if there is new formData set it to accountDetails index currentStep
  // [        // ...current.slice(0, currentStep),
  // formData,
  // ...current.slice(currentStep + 1),]
  const nextStep = () => {
    if (Object.keys(formData).length !== 0) {
      setAccountDetails((current) => ({
        ...current,
        ...formData,
      }));
    }
    currentStep < 3 && setCurrentStep((current) => current + 1);
  };

  const backStep = () => {
    if (Object.keys(formData).length !== 0) {
      setAccountDetails((current) => ({
        ...current,
        ...formData,
      }));
    }
    currentStep < 3 && setCurrentStep((current) => current - 1);
  };

  const step = stepDetails[currentStep];

  return (
    <>
      <SignupSteps
        currentStep={currentStep}
        steps={steps}
        modalOpen={modalOpen}
      />
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:py-4 lg:px-16 xl:col-span-6"
      >
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl w-full">
          <h1
            className={`mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-center sm:text-start ${
              modalOpen ? "opacity-40" : ""
            }`}
          >
            {step.name}
          </h1>
          {step.body != null ? (
            <p
              className={`text-center sm:text-start mt-4 leading-relaxed ${
                modalOpen ? "opacity-40" : ""
              }`}
            >
              {step.body}
            </p>
          ) : null}

          {/* component with inputs */}
          {step.component}

          <div
            className={`col-span-6 sm:flex sm:items-center gap:2 sm:gap-4 mt-1 sm:mt-2 ${
              modalOpen ? "opacity-40" : ""
            }`}
          >
            {currentStep > 0 ? (
              <button
                onClick={backStep}
                className="inline-block shrink-0 rounded-md bg-blue-400 border border-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-500 disabled:border-zinc-400 disabled:bg-zinc-400 disabled:text-zinc-300 hover:disabled:text-zinc-300 hover:disabled:bg-zinc-400"
              >
                Back
              </button>
            ) : null}
            {currentStep < steps.length ? (
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
            ) : null}

            {currentStep == 0 ? (
              <p className="mt-4 text-sm text-center  sm:text-start sm:mt-0">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="dark:text-zinc-400 text-zinc-700 underline hover:text-blue-400"
                >
                  Log in
                </Link>
                .
              </p>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}

export default signup;
