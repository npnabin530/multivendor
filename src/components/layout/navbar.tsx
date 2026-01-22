import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { logoutAction } from "@/lib/actions/auth-server";
import { SearchBar } from "@/components/layout/search-bar";

export async function Navbar() {
    const session = await auth();
    const user = session?.user;

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border glass-dark px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">
                MultiVendor
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
                <SearchBar />
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground items-center">
                <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
                <Link href="/seller/dashboard" className="hover:text-primary transition-colors">Sell</Link>

                <div className="flex gap-4 items-center">
                    <Link href="/cart" className="relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary transition-colors">
                            <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-background">0</span>
                    </Link>

                    <div className="h-4 w-[1px] bg-border mx-2" />

                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="text-xs font-bold text-foreground">
                                Hi, {user.name?.split(" ")[0]}
                            </div>
                            <form action={logoutAction}>
                                <Button variant="ghost" size="sm" type="submit">Logout</Button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <Button variant="ghost" size="sm">Login</Button>
                            </Link>
                            <Link href="/auth/signup">
                                <Button size="sm">Signup</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
