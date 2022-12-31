import Link from "next/link";

interface ButtonProps {
  content: string;
  path: string;
}

// darkmode options
// dark:active:text-zinc-900 dark:text-zinc-800 hover:dark:text-zinc-900
// dark:active:text-zinc-100 dark:text-zinc-200 hover:dark:text-zinc-100
// dark:active:text-violet-900 dark:text-violet-800 hover:dark:text-violet-900
// dark:active:text-pink-800 dark:text-pink-900 hover:dark:text-pink-800

const Button = ({ content, path }: ButtonProps) => {
  return (
    <Link
      href={path}
      className="group relative inline-block text-sm font-medium dark:active:text-violet-800 dark:text-violet-900 hover:dark:text-violet-800 hover:text-violet-500 text-violet-400 focus:outline-none focus:ring active:text-violet-500"
    >
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 dark:bg-violet-500 bg-violet-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block border border-current dark:bg-violet-400 bg-white px-8 py-2">
        {content}
      </span>
    </Link>
  );
};

export default Button;

export const ButtonRound = ({ content, path }: ButtonProps) => {
  return (
    <Link
      href={path}
      className="group relative inline-block text-sm font-medium dark:active:text-pink-800 dark:text-pink-900 hover:dark:text-pink-800 hover:text-pink-500 text-pink-400 rounded-full focus:outline-none focus:ring active:text-pink-500 text-center"
    >
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 dark:bg-pink-500 bg-pink-400 rounded-full transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block border border-current dark:bg-pink-400 bg-white px-4 py-2 rounded-full">
        {content}
      </span>
    </Link>
  );
};
