"use client";

import { useSession } from "next-auth/react";
import type { UserRole } from "@prisma/client";
import FormError from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export default function RoleGate({ children, allowedRole }: RoleGateProps) {
  const session = useSession();

  if (session.data?.user.role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content." />
    );
  }

  return <>{children}</>;
}
