import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/Common/Inputs";

const login = () => {
  return <Login />;
};

export default login;

function Login() {
  const [formData, setFormData] = useState({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleLogin() {
    console.log(formData);
  }

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
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 dark:shadow-zinc-800 shadow-2xl"
        >
          <p className="text-lg font-medium">Sign in to your account</p>
          <Input
            type="email"
            validationText="Please enter a valid email"
            label="Email"
            name="email"
            placeholder="Enter Email"
            min={3}
            half={false}
            onChange={onChange}
            value={false}
          />
          <Input
            type="password"
            validationText="Please enter a valid password"
            label="Password"
            name="password"
            placeholder="Enter Password"
            min={6}
            half={false}
            onChange={onChange}
            value={false}
          />

          <button
            onClick={handleLogin}
            type="submit"
            className="block w-full rounded-lg bg-blue-400 hover:bg-blue-300 px-5 py-3 text-sm font-medium text-white disabled:border-zinc-400 disabled:bg-zinc-400 disabled:text-zinc-300 hover:disabled:text-zinc-300 hover:disabled:bg-zinc-400"
            disabled={!formData.email || !formData.password}
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
}
