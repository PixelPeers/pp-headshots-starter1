import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const BYPASS_USER_UID = "3157823c-8ddb-42e5-894f-6a9367f6efcf";

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies });

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
    return <div>User not found</div>;
  }

  const { data: models } = await supabase
    .from("models")
    .select(
      `*, samples (
      *
    )`
    )
    .eq("user_id", activeUser.id);

  return <ClientSideModelsList serverModels={models ?? []} />;
}
