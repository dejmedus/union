import Link from "next/link";

const Logo = () => {
  return (
    <Link className="block text-stone-600" href="/">
      <h2 className="text-blue-400 hover:text-blue-500 font-bold border-full text-xl">
        Union
      </h2>
    </Link>
  );
};

export default Logo;
