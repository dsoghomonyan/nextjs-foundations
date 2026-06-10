import Link from "next/link";
import { Suspense } from "react";
import { getSubscriptionStatus } from "@/lib/subscription";
import SubscribeButton from "./SubscribeButton";
import SearchInput from "./SearchInput";

// Dynamic: reads cookies() — must live inside <Suspense>
async function SubscribeStatus() {
  const isSubscribed = await getSubscriptionStatus();
  return <SubscribeButton isSubscribed={isSubscribed} />;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-black text-gray-900 tracking-tight shrink-0">
          The<span className="text-blue-600">Dispatch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/search" className="hover:text-gray-900 transition-colors">Browse</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Suspense fallback={null}>
            <SearchInput />
          </Suspense>
          <Suspense fallback={null}>
            <SubscribeStatus />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
