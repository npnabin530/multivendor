import { Sidebar } from "@/components/layout/sidebar";
import { AdminBar } from "@/components/admin/admin-bar";
import { auth } from "@/auth";

const ADMIN_LINKS = [
    { name: "Overview", href: "/admin/dashboard", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg> },
    { name: "Sellers", href: "/admin/sellers", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { name: "Categories", href: "/admin/categories", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg> },
    { name: "Commissions", href: "/admin/commissions", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    { name: "Logs", href: "/admin/logs", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    const userName = session?.user?.name || undefined;

    return (
        <>
            <AdminBar userName={userName} />
            <div className="flex min-h-screen bg-background text-foreground pt-[120px]">
                <Sidebar module="admin" links={ADMIN_LINKS} />
                <main className="flex-1 p-8 md:p-12 overflow-y-auto">
                    {children}
                </main>
            </div>
        </>
    );
}
