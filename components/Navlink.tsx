import Link from 'next/link'

interface NavlinkProps {
  name: string;
  path: string;
}

export default function Navlink({ name, path }: NavlinkProps) {
  return (
    <li>
      <Link
        className="text-gray-500 transition hover:text-gray-500/75"
        href={path}
      >
        {name}
      </Link>
    </li>
  );
}
