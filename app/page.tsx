import { Poppins } from "next/font/google";
import Link from "next/link";

import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "flex select-none flex-col font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          <span className="cursor-default text-right text-6xl">🔐 Auth</span>
          <Link
            href="https://github.com/frantanius/next-auth-v5"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer text-right text-xs font-extrabold drop-shadow-xl"
          >
            Source Code
          </Link>
        </h1>
        <p className="text-lg text-white">A simple authentication service.</p>

        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
