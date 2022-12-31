import Link from "next/link";

const Logo = () => {
  return (
    <Link className="block text-stone-600 group" href="/">
      <h2 className="text-blue-400 font-bold border-full text-xl group-hover:text-blue-500">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200">
          <span className="sr-only">Logo</span>
          🪢
        </span>
        {"  "}Union
      </h2>
    </Link>
  );
};

export default Logo;
