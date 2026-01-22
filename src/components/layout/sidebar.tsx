import Link from "next/link";

interface SidebarProps {
    module: "seller" | "admin";
    links: { name: string; href: string; icon: React.ReactNode }[];
}

export function Sidebar({ module, links }: SidebarProps) {
    return (
        <aside className="w-72 border-r border-border glass h-screen sticky top-0 flex flex-col p-6">
            <div className="mb-12 flex flex-col">
                <Link href="/" className="text-2xl font-display font-bold text-gradient">
                    MultiVendor
                </Link>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1 ml-1">
                    {module} Panel
                </span>
            </div>

            <nav className="flex-1 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all group font-medium"
                    >
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                            {link.icon}
                        </span>
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border">
                <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-muted/30">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-bold truncate">Nabina Shrestha</div>
                        <div className="text-[10px] text-muted-foreground truncate uppercase tracking-tighter">Verified {module}</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
