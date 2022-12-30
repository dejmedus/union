interface SignupStepProps {
  currentStep: number;
}
const SignupSteps = ({ currentStep }: SignupStepProps) => {
  const mockSteps = ["Account", "Preferences", "Photos", "Confirmation"];

  return (
    <div className="grid justify-items-center my-2 md:my-4">
      <ol className="flex gap-2 sm:gap-4 text-xs font-medium text-zinc-500">
        {mockSteps.map((step, index) => {
          {
            return currentStep > index ? (
              <Complete order={index} name={step} />
            ) : currentStep == index ? (
              <Current order={index} name={step} />
            ) : (
              <Next order={index} name={step} />
            );
          }
        })}
      </ol>
    </div>
  );
};

export default SignupSteps;

interface StepProps {
  order: number;
  name: string;
}
function Complete({ order, name }: StepProps) {
  return (
    <li key={order} className="flex items-center w-28 text-green-400">
      <span className="rounded bg-green-50 p-1.5 text-green-200 dark:bg-green-300 dark:text-green-50">
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
      </span>

      <span className="ml-2"> {name} </span>
    </li>
  );
}

function Current({ order, name }: StepProps) {
  return (
    <li key={order} className="flex items-center text-blue-400 w-28">
      <span className="h-6 w-6 rounded bg-blue-50 dark:bg-blue-400 dark:text-blue-50 text-center text-[10px] font-bold leading-6">
        {order}
      </span>

      <span className="ml-2"> {name} </span>
    </li>
  );
}

function Next({ order, name }: StepProps) {
  return (
    <li key={order} className="flex items-center w-28">
      <span className="h-6 w-6 rounded bg-zinc-50 text-center text-[10px] font-bold leading-6 text-zinc-600">
        {order}
      </span>

      <span className="ml-2 dark:text-zinc-300"> {name} </span>
    </li>
  );
}
