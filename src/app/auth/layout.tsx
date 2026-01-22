import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-lg relative z-10">
                <div className="text-center mb-10">
                    <Link href="/" className="text-4xl font-display font-bold text-gradient">
                        MultiVendor
                    </Link>
                    <div className="mt-4 text-muted-foreground font-medium uppercase tracking-[0.2em] text-[10px]">
                        The Future of Marketplace
                    </div>
                </div>

                <div className="glass-dark border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl">
                    {children}
                </div>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
