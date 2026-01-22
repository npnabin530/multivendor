import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [], // Real providers will be added in auth.ts
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
} satisfies NextAuthConfig;
