import { Input, Checkbox } from "@/common/Inputs";
import { Multi, MultiCheckbox, MultiRadio } from "@/components/Common/Multis";
import { useState } from "react";

interface ComponentProps {
  formData: {
    name: string;
    username: string;
    email: string;
    mailingList: boolean;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Component = ({
  formData,
  onChange,
  modalOpen,
  setModalOpen,
}: ComponentProps) => {
  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  const togglePrivacyModal = () => {
    setPrivacyModal((current) => !current);
    setModalOpen((current) => !current);
  };
  const toggleTermsModal = () => {
    setTermsModal((current) => !current);
    setModalOpen((current) => !current);
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
      <div
        className={`mt-8 grid grid-cols-6 gap-2 md:gap-4 lg:gap-6 ${
          modalOpen ? "opacity-40" : ""
        }`}
      >
        <Input
          type="text"
          validationText="Name field cannot be blank"
          label="Name"
          name="name"
          placeholder="Enter Name"
          min={1}
          half={true}
          onChange={onChange}
          value={formData ? formData.name : false}
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
          value={formData ? formData.username : false}
        />
        <Multi half={true} groupLabel="Your pronouns">
          <MultiCheckbox
            value={formData.gender["s"]}
            groupName="gender"
            onChange={onChange}
            name="s"
            label="she/her"
          />
          <MultiCheckbox
            value={formData.gender["h"]}
            groupName="gender"
            onChange={onChange}
            name="h"
            label="he/him"
          />
          <MultiCheckbox
            value={formData.gender["t"]}
            groupName="gender"
            onChange={onChange}
            name="t"
            label="they/them"
          />
          <MultiCheckbox
            value={formData.gender["o"]}
            groupName="gender"
            onChange={onChange}
            name="o"
            label="other"
          />
        </Multi>

        <Input
          type="number"
          validationText="You must be over the age of 18 to use Union"
          min={18}
          placeholder="25"
          onChange={onChange}
          label="Age"
          value={formData.age}
          half={true}
          name="age"
        />

        <Checkbox
          label="I want to receive emails about events, updates and
                announcements."
          name="mailingList"
          half={false}
          onChange={onChange}
          isChecked={formData ? formData.mailingList : false}
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
      </div>
    </>
  );
};

export default Component;

interface ModalProps {
  title: string;
  body: string;
  id: string;
  toggleModal: () => void;
}

function Modal({ title, body, id, toggleModal }: ModalProps) {
  return (
    <div
      className="z-20 backdrop-opacity-40 rounded-2xl border dark:border-zinc-900 border-blue-100 dark:bg-black bg-white p-8 shadow-lg max-w-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
