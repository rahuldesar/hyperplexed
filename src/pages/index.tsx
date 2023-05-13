import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white">
      Hello there
      <br />
      <Link href="/blur" className="hover:cursor-pointer hover:text-blue-300">
        Blur
      </Link>
    </div>
  );
}
