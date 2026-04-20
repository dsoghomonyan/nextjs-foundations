import { cookies } from "next/headers";
import { SUBSCRIPTION_COOKIE } from "./constants";

export { SUBSCRIPTION_COOKIE };

export async function getSubscriptionStatus(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(SUBSCRIPTION_COOKIE)?.value === "true";
}
