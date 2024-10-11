import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/actions/data/user";
import type { UserRole } from "@prisma/client";

/*
  Declare module
  Fixing error type role
*/
declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  /*
   * Pages signIn: NextAuth will always redirect to signIn
    when something goes wrong

   * Pages error: NextAuth will redirect to
    custom page url "/auth/error"
  */
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  /*
    Events for email | credentials verification
  */
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  /*
    Callbacks for extends the session
  */
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      // logout
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  ...authConfig,
});
