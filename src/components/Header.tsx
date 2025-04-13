import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#f5f5f560] backdrop-blur-md shadow-md z-10 flex justify-between items-center px-6 py-4">
      <Link href="/" className="text-xl font-bold text-gray-800 hover:underline">
        NoZ
      </Link>
      <LanguageSwitcher />
    </header>
  );
}
