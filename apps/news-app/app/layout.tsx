import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheDispatch — Modern News",
  description: "Stay informed with TheDispatch, your modern news platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-gray-100 mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-400 flex items-center justify-between">
            <span>© 2026 TheDispatch. All rights reserved.</span>
            <span>Built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
