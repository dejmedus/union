import Link from "next/link";

interface NavlinkProps {
  name: string;
  path: string;
}

export default function Navlink({ name, path }: NavlinkProps) {
  return (
    <li>
      <Link
        className="dark:text-zinc-400 hover:dark:text-zinc-500 text-zinc-500 transition hover:text-zinc-600"
        href={path}
      >
        {name}
      </Link>
    </li>
  );
}
