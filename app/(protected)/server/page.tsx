import UserInfo from "@/components/user-info";
import { auth } from "@/auth";

export default async function ServerPage() {
  const session = await auth();

  return <UserInfo user={session?.user} label="💻 Server Component" />;
}
