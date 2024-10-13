"use client";

import type { PropsWithChildren } from "react";
import { useTransition } from "react";
import { logoutAction } from "@/actions/logout";

export default function LogoutButton({ children }: PropsWithChildren) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      logoutAction();
    });
  };

  return (
    <button
      disabled={isPending}
      aria-disabled={isPending}
      onClick={onClick}
      className="w-full cursor-pointer"
    >
      {children}
    </button>
  );
}
