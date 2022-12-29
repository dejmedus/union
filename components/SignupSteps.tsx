const SignupSteps = ({ currentStep }) => {
  const mockSteps = ["Account", "Preferences", "Photos", "Confirmation"];
  return (
    <div>
      <h2 className="sr-only">Steps</h2>
      <div>
        <ol className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4">
          {mockSteps.map((step, index) => {
            {
              return currentStep > index ? (
                <Complete />
              ) : currentStep == index ? (
                <Current order={index} name={step} />
              ) : (
                <Next order={index} name={step} />
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};

export default SignupSteps;

interface StepProps {
  order: number;
  name: string;
}
function Complete() {
  return (
    <li className="flex">
      <span className="rounded bg-green-50 p-1.5 text-green-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </li>
  );
}

function Current({ order, name }: StepProps) {
  return (
    <li className="flex items-center justify-center text-blue-400">
      <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px] font-bold leading-6">
        {order}
      </span>

      <span className="ml-2"> {name} </span>
    </li>
  );
}

function Next({ order, name }: StepProps) {
  return (
    <li className="flex items-center justify-end">
      <span className="h-6 w-6 rounded bg-gray-50 text-center text-[10px] font-bold leading-6 text-gray-600">
        {order}
      </span>

      <span className="ml-2"> {name} </span>
    </li>
  );
}
