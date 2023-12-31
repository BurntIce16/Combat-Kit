import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-500 p-1 pr-2 pl-2 w-full h-50 drop-shadow-sm	">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt={""} width={75} height={75} />
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">
              <div className="text-gray-700">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-gray-700">About</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
