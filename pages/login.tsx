import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/Common/Inputs";
import { getProviders, signIn } from "next-auth/react";

const login = ({ providers }) => {
  return <Login providers={providers} />;
};

export default login;

interface LoginProps {
  providers: object;
}

function Login({ providers }: LoginProps) {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleLogin() {
    console.log(formData.email, formData.password);
    // signIn("credentials", { username: formData.email, password: formData.password });
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

        <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 dark:shadow-zinc-800 shadow-2xl">
          {providers
            ? Object.values(providers).map((provider) => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button
                    className="block w-full rounded-lg border-2 border-zinc-900 transition duration-200  hover:bg-blue-400 hover:border-blue-400 hover:text-zinc-100 border:bg-zinc-900 dark:bg-zinc-100 text-zinc-900  px-5 py-3 text-sm font-medium dark:text-zinc-50"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              ))
            : null}
          <p className="text-center text-sm text-zinc-500">
            No account?{" "}
            <Link className="underline hover:text-zinc-700" href="/signup">
              Sign up
            </Link>
          </p>
        </div>
        {/* <form
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
        </form> */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
