"use client";

import UserInfo from "@/components/user-info";
import { useSession } from "next-auth/react";

export default function ClientPage() {
  const session = useSession();

  return <UserInfo user={session.data?.user} label="📱 Client Component" />;
}
