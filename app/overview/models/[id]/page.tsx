import Login from "@/app/login/page";
import { Icons } from "@/components/icons";
import ClientSideModel from "@/components/realtime/ClientSideModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export const dynamic = "force-dynamic";

const BYPASS_USER_UID = "3157823c-8ddb-42e5-894f-6a9367f6efcf";

export default async function Index({ params }: { params: { id: string } }) {
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
    return <Login />;
  }

  const { data: model } = await supabase
    .from("models")
    .select("*")
    .eq("id", Number(params.id))
    .eq("user_id", activeUser.id)
    .single();

  if (!model) {
    redirect("/overview");
  }

  const { data: images } = await supabase
    .from("images")
    .select("*")
    .eq("modelId", model.id);

  const { data: samples } = await supabase.from("samples").select("*").eq("modelId", model.id);

  return (
    <div id="train-model-container" className="w-full h-full">
      <div className="flex flex-row gap-4">
        <Link href="/overview" className="text-xs w-fit">
          <Button variant={"outline"} className="text-xs" size="sm">
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <div className="flex flex-row gap-2 align-middle text-center items-center pb-4">
          <h1 className="text-xl">{model.name}</h1>
          <div>
            <Badge
              variant={model.status === "finished" ? "default" : "secondary"}
              className="text-xs font-medium"
            >
              {model.status === "processing" ? "training" : model.status }
              {model.status === "processing" && (
                <Icons.spinner className="h-4 w-4 animate-spin ml-2 inline-block" />
              )}
            </Badge>
          </div>
        </div>
      </div>

      <ClientSideModel samples={samples ?? []} serverModel={model} serverImages={images ?? []} />
    </div>
  );
}
