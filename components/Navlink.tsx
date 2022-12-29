import Link from 'next/link'

interface NavlinkProps {
  name: string;
  path: string;
}

export default function Navlink({ name, path }: NavlinkProps) {
  return (
    <li>
      <Link
        className="text-zinc-500 transition hover:text-zinc-600"
        href={path}
      >
        {name}
      </Link>
    </li>
  );
}
