import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center font-mono text-white">
      <h3 className="text-5xl">CSS cool stuff</h3>
      <br />
      <Link href="/blur" className="hover:cursor-pointer hover:text-blue-400">
        Blur
      </Link>
      <br />
      <Link href="/randomize-word" className="hover:cursor-pointer hover:text-blue-400">
        Random Word
      </Link>
    </div>
  );
}
