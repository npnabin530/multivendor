"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    ShoppingBag,
    Settings,
    Bell,
    Search,
    LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_NAV_LINKS = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Sellers", href: "/admin/sellers", icon: Users },
    { name: "Products", href: "/admin/products", icon: ShoppingBag },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminBar({ userName }: { userName?: string }) {
    const pathname = usePathname();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-secondary to-primary border-b border-white/10 shadow-2xl">
            <div className="px-6 py-3 flex items-center justify-between">
                {/* Left: Logo & Nav */}
                <div className="flex items-center gap-8">
                    <Link href="/admin/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <LayoutDashboard size={18} className="text-white" />
                        </div>
                        <span className="text-white font-display font-bold text-lg">Admin Panel</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {ADMIN_NAV_LINKS.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isActive
                                        ? "bg-white/20 text-white shadow-lg"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    <Icon size={16} />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right: Search, Notifications, User */}
                <div className="flex items-center gap-4">
                    {/* Quick Search */}
                    <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                        <Search size={16} className="text-white/70" />
                        <input
                            type="text"
                            placeholder="Quick search..."
                            className="bg-transparent border-none outline-none text-white text-sm placeholder:text-white/50 w-48"
                        />
                    </div>

                    {/* Notifications */}
                    <button
                        className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="View notifications"
                        title="Notifications"
                    >
                        <Bell size={20} className="text-white" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full ring-2 ring-primary" />
                    </button>

                    {/* User Menu */}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/20">
                        <div className="hidden md:block text-right">
                            <div className="text-white text-sm font-bold">{userName || "Admin"}</div>
                            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Administrator</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border-2 border-white/30">
                            {userName?.charAt(0) || "A"}
                        </div>
                    </div>

                    {/* Logout */}
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
                            <LogOut size={16} />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* System Status Bar */}
            <div className="bg-black/20 backdrop-blur-sm px-6 py-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-6 text-white/70">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        System Online
                    </span>
                    <span>Server: Healthy</span>
                    <span>DB: Connected</span>
                </div>
                <div className="text-white/50">
                    Last updated: {new Date().toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}
