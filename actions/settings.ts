"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";
import { auth } from "@/auth";
import { getUserByEmail, getUserById } from "@/actions/data/user";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { SettingsSchema } from "@/schemas";

export const settingsAction = async (
  values: z.infer<typeof SettingsSchema>,
) => {
  const session = await auth();

  if (!session?.user) return { error: "Unauthorized." };

  const dbUser = await getUserById(session.user.id);

  if (!dbUser) return { error: "Unauthorized." };

  if (session.user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== session.user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== session.user.id)
      return { error: "Email already in use." };

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "Verification email sent." };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password,
    );

    if (!passwordsMatch)
      return {
        error: "Incorrect password.",
      };

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);

    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...values,
    },
  });

  return { success: "Settings updated." };
};
