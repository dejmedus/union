import Link from "next/link";

const login = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-blue-400 sm:text-3xl">
          Welcome Back!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-zinc-500">
          It&apos;s good to see you.
        </p>

        <form
          action="post"
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <p className="text-lg font-medium">Sign in to your account</p>
          <Input
            type="email"
            validationText="Please enter a valid email"
            label="Email"
            placeholder="Enter Email"
            min={3}
          />
          <Input
            type="password"
            validationText="Please enter a valid password"
            label="Password"
            placeholder="Enter Password"
            min={6}
          />

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-400 hover:bg-blue-300 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-zinc-500">
            No account?{" "}
            <Link className="underline hover:text-zinc-700" href="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;

interface InputProps {
  type: string;
  validationText: string;
  placeholder: string;
  label: string;
  min: number;
}
function Input({ type, validationText, placeholder, label, min }: InputProps) {
  return (
    <div>
      <label htmlFor={type} className="text-sm font-medium">
        {label}
      </label>

      <div className="relative mt-1">
        <input
          type={type}
          id={label}
          className="w-full rounded-lg border-zinc-200 p-4 pr-12 text-sm shadow-sm peer valid:border-zinc-200 invalid:border-red-200 "
          placeholder={placeholder}
          minLength={min}
        />
        <p className="invisible peer-focus:invisible peer-invalid:visible ml-2 mt-1 text-red-700 font-light text-xs">
          {validationText}
        </p>
      </div>
    </div>
  );
}
