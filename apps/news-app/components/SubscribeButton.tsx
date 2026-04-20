"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { subscribe, unsubscribe } from "@/app/actions/subscription";

type Props = {
  isSubscribed: boolean;
  redirectTo?: string;
};

export default function SubscribeButton({ isSubscribed, redirectTo }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (isSubscribed) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          ✓ Subscribed
        </span>
        <button
          onClick={() => startTransition(() => unsubscribe())}
          disabled={isPending}
          className="text-sm text-gray-500 hover:text-red-500 transition-colors disabled:opacity-50"
        >
          {isPending ? "..." : "Unsubscribe"}
        </button>
      </div>
    );
  }

  function handleSubscribe() {
    startTransition(async () => {
      await subscribe();
      if (redirectTo) router.push(redirectTo);
    });
  }

  return (
    <button
      onClick={handleSubscribe}
      disabled={isPending}
      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
    >
      {isPending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
