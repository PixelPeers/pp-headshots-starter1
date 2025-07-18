import Login from "../login/page";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const BYPASS_USER_UID = "3157823c-8ddb-42e5-894f-6a9367f6efcf";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && process.env.NODE_ENV === "development") {
    const mockUser = {
      id: BYPASS_USER_UID,
      email: "panzhiqiang@gmail.com",
      user_metadata: {},
      app_metadata: {},
      aud: "authenticated",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    return (
      <div className="flex w-full flex-col px-4 lg:px-40 py-6">
        {children}
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  // Updated to ensure compatibility with new layout
  return (
    <div className="flex w-full flex-col px-4 lg:px-40 py-6">
      {children}
    </div>
  );
}
