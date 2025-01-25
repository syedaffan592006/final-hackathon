import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <img src="/saylani-logo.png" alt="Saylani Welfare" className="w-32" />
      <nav className="space-x-4">
        <Link href="/" className="hover:text-green-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-green-500">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-green-500">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}