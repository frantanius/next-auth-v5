import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/actions/data/user";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          /*
            return null, if user try to login credential but
            previously register as google or github, which dont have password
          */
          if (!user || !user.password) return null;

          /*
            return user, if previously register as credentials
            by comparing the passwords
          */
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        /*
          return null by default
        */
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
