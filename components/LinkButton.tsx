import Link from "next/link";

interface ButtonProps {
  content: string;
  path: string;
}
const Button = ({ content, path }: ButtonProps) => {
  return (
    <Link
      href={path}
      className="group relative inline-block text-sm font-medium hover:text-violet-500 text-violet-400 focus:outline-none focus:ring active:text-violet-500"
    >
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-violet-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block border border-current bg-white px-8 py-2">
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
      className="group relative inline-block text-sm font-medium hover:text-pink-500 text-pink-400 rounded-full focus:outline-none focus:ring active:text-pink-500 text-center"
    >
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-pink-400 rounded-full transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block border border-current bg-white px-4 py-2 rounded-full">
        {content}
      </span>
    </Link>
  );
};
