import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import StripePricingTable from "@/components/stripe/StripeTable";

export const dynamic = "force-dynamic";

const BYPASS_USER_UID = "3157823c-8ddb-42e5-894f-6a9367f6efcf";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let activeUser = user;
  
  if (!user && process.env.NODE_ENV === "development") {
    activeUser = {
      id: BYPASS_USER_UID,
      email: "panzhiqiang@gmail.com",
      user_metadata: {},
      app_metadata: {},
      aud: "authenticated",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as any;
  }

  if (!activeUser) {
    return redirect("/login");
  }

  return (
    <StripePricingTable user={activeUser} />
  );
}
