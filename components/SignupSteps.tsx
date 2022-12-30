interface SignupStepProps {
  currentStep: number;
}
const SignupSteps = ({ currentStep }: SignupStepProps) => {
  const mockSteps = ["Account", "Preferences", "Photos", "Confirmation"];

  return (
    <ol className="flex my-2 md:my-4 items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4">
      {mockSteps.map((step, index) => {
        {
          return currentStep > index ? (
            <Complete order={index} />
          ) : currentStep == index ? (
            <Current order={index} name={step} />
          ) : (
            <Next order={index} name={step} />
          );
        }
      })}
    </ol>
  );
};

export default SignupSteps;

interface StepProps {
  order: number;
  name?: string;
}
function Complete({ order }: StepProps) {
  return (
    <li key={order} className="flex">
      <button className="rounded bg-green-50 hover:bg-green-100 p-1.5 text-green-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}

function Current({ order, name }: StepProps) {
  return (
    <li key={order} className="flex items-center justify-center text-blue-400">
      <button className="h-6 w-6 rounded hover:bg-blue-100 bg-blue-50 text-center text-[10px] font-bold leading-6">
        {order}
      </button>

      <span className="ml-2"> {name} </span>
    </li>
  );
}

function Next({ order, name }: StepProps) {
  return (
    <li key={order} className="flex items-center justify-end">
      <button className="h-6 w-6 rounded bg-gray-50 hover:bg-gray-100 text-center text-[10px] font-bold leading-6 text-gray-600">
        {order}
      </button>

      <span className="ml-2"> {name} </span>
    </li>
  );
}
