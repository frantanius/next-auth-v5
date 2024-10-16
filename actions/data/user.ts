/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (_) {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  if (!id) return null;

  try {
    const user = await db.user.findFirst({ where: { id } });
    return user;
  } catch (_) {
    return null;
  }
};
