import Link from "next/link";
import { Input, Checkbox } from "@/components/Inputs";
import { useState } from "react";

interface AccountProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  accountDetails: object[];
  setAccountDetails: React.Dispatch<React.SetStateAction<object[]>>;
}

export default function Account({
  currentStep,
  setCurrentStep,
  accountDetails,
  setAccountDetails,
}: AccountProps) {
  const [formData, setFormData] = useState(
    accountDetails[currentStep]
      ? accountDetails[currentStep]
      : {
          name: "",
          username: "",
          email: "",
        }
  );

  // if there is new formData set it to accountDetails index currentStep
  const nextStep = () => {
    if (Object.keys(formData).length !== 0) {
      // setAccountDetails((current) => [formData, ...current.slice(1)]);
      setAccountDetails((current) => [
        ...current.slice(0, currentStep - 1),
        formData,
        ...current.slice(currentStep + 1),
      ]);
    }
    currentStep < 3 && setCurrentStep((current) => current + 1);
  };

  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  const togglePrivacyModal = () => setPrivacyModal((current) => !current);
  const toggleTermsModal = () => setTermsModal((current) => !current);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type == "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <>
      {privacyModal ? (
        <Modal
          title="Privacy Policy"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus velit et magna auctor auctor. Curabitur eu justo maximus, lacinia augue quis, interdum risus. Suspendisse vel turpis a mauris gravida porttitor a ut nisl. Nullam dui turpis, auctor sed turpis non, rhoncus porttitor tellus. Integer feugiat auctor lacus nec porttitor. Etiam at nulla facilisis, finibus nibh ut, bibendum neque. Praesent a mi ultrices, pharetra nisi ut, commodo nisl. Quisque odio odio, auctor et mollis sed, pretium ut elit."
          id="privacy"
          toggleModal={togglePrivacyModal}
        />
      ) : null}
      {termsModal ? (
        <Modal
          title="Terms and Conditions"
          body="1. By using this app you agree to name (or rename) your firstborn child Union. 2. ..."
          id="terms"
          toggleModal={toggleTermsModal}
        />
      ) : null}

      <div className="peer-[.is-open]:opacity-40 max-w-xl lg:max-w-3xl">
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          Welcome to Union
        </h1>

        <p className="mt-4 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

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
          <Input
            type="text"
            validationText="Username must be atleast 4 characters long"
            label="Username"
            name="username"
            placeholder="Enter Username"
            min={4}
            half={true}
            onChange={onChange}
            value={
              accountDetails[currentStep]
                ? accountDetails[currentStep].username
                : false
            }
          />
          <Input
            type="email"
            validationText="Please enter a valid email"
            label="Email"
            name="email"
            placeholder="Enter Email"
            min={3}
            half={false}
            onChange={onChange}
            value={
              accountDetails[currentStep]
                ? accountDetails[currentStep].email
                : false
            }
          />

          <Checkbox
            label="I want to receive emails about events, updates and
                announcements."
            name="mailingList"
            half={false}
            onChange={onChange}
            isChecked={
              accountDetails[currentStep]
                ? accountDetails[currentStep].mailingList
                : false
            }
          />

          <div className="col-span-6">
            <p className="text-sm">
              By creating an account, you agree to our{" "}
              <button
                onClick={toggleTermsModal}
                className="dark:text-zinc-400 text-zinc-700 hover:text-blue-400 underline"
              >
                terms and conditions
              </button>{" "}
              and{" "}
              <button
                onClick={togglePrivacyModal}
                className="dark:text-zinc-400 text-zinc-700 hover:text-blue-400 underline"
              >
                privacy policy
              </button>
              .
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
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

            <p className="mt-4 text-sm sm:mt-0">
              Already have an account?{" "}
              <Link
                href="/login"
                className="dark:text-zinc-400 text-zinc-700 underline hover:text-blue-400"
              >
                Log in
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface ModalProps {
  title: string;
  body: string;
  id: string;
  toggleModal: () => void;
}

function Modal({ title, body, id, toggleModal }: ModalProps) {
  return (
    <div
      className="is-open peer z-20 rounded-2xl border dark:border-zinc-900 border-blue-100 dark:bg-black bg-white p-8 shadow-lg max-w-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      role="alert"
      id={id}
    >
      <div className="items-center sm:flex">
        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 dark:text-black text-white">
          <svg
            className="h-3 w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <p className="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">{title}</p>
      </div>

      <p className="my-4 h-48 max-h-48 p-1 rounded bg-zinc-100 dark:bg-zinc-900 overflow-scroll">
        {body}
      </p>

      <button
        name={id}
        onClick={toggleModal}
        className="inline-block w-full rounded-lg dark:text-black bg-blue-400 hover:bg-blue-500 px-5 py-2 text-center text-sm font-semibold text-white sm:w-auto"
      >
        Mark as Read
      </button>
    </div>
  );
}
