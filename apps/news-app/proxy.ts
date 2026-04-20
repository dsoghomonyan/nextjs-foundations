import { NextRequest, NextResponse } from "next/server";
import { SUBSCRIPTION_COOKIE, PREMIUM_SLUGS } from "@/lib/constants";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/articles/")) {
    const slug = pathname.split("/articles/")[1];
    const isPremium = PREMIUM_SLUGS.has(slug);

    if (isPremium) {
      const isSubscribed =
        request.cookies.get(SUBSCRIPTION_COOKIE)?.value === "true";

      if (!isSubscribed) {
        const url = request.nextUrl.clone();
        url.pathname = "/subscribe";
        url.searchParams.set("from", pathname);
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/articles/:path*"],
};
