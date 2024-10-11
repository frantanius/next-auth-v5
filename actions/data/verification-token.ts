/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (_) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
      orderBy: {
        expires: "desc",
      },
    });

    return verificationToken;
  } catch (_) {
    return null;
  }
};
