import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const role = (req.auth?.user as any)?.role;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute = ["/", "/categories", "/products"].some(route => nextUrl.pathname === route || nextUrl.pathname.startsWith("/products/"));
    const isAuthRoute = nextUrl.pathname.startsWith("/auth");

    const isAdminRoute = nextUrl.pathname.startsWith("/admin");
    const isSellerRoute = nextUrl.pathname.startsWith("/seller");

    if (isApiAuthRoute) return;

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/", nextUrl));
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL("/auth/login", nextUrl));
    }

    if (isLoggedIn) {
        if (isAdminRoute && role !== "ADMIN") {
            return NextResponse.redirect(new URL("/", nextUrl));
        }
        if (isSellerRoute && role !== "SELLER" && role !== "ADMIN") {
            return NextResponse.redirect(new URL("/", nextUrl));
        }
    }

    return;
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
