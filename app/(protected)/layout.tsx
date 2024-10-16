import type { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Toaster />
      <div className="flex h-full w-full flex-col items-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
}
