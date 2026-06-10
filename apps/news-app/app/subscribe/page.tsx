import { getSubscriptionStatus } from "@/lib/subscription";
import { redirect } from "next/navigation";
import SubscribeButton from "@/components/SubscribeButton";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ from?: string }>;
};

// Dynamic: reads cookies() + searchParams — must live inside <Suspense>
async function RedirectIfSubscribed({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const isSubscribed = await getSubscriptionStatus();
  const { from } = await searchParams;
  if (isSubscribed) {
    redirect(from ?? "/");
  }
  return null;
}

export default function SubscribePage({ searchParams }: Props) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      {/* Streams in: redirects if already subscribed */}
      <Suspense fallback={null}>
        <RedirectIfSubscribed searchParams={searchParams} />
      </Suspense>

      <div className="max-w-md w-full text-center px-6">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">
          Premium Content
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          This article is for subscribers. Subscribe for free to get full access
          to all premium articles — no payment required.
        </p>

        <div className="flex justify-center mb-6">
          <SubscribeButton isSubscribed={false} />
        </div>

        <p className="text-xs text-gray-400">
          Already subscribed?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Go back
          </a>
        </p>
      </div>
    </div>
  );
}
