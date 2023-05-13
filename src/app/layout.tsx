import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyperplexed demos",
  description: "Hyperplexed demos using Nextjs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
