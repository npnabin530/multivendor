"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signupAction } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const result = await signupAction(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        } else if (result?.success) {
            router.push("/auth/login?registered=true");
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display font-bold mb-2 text-foreground">Create Account</h2>
                <p className="text-muted-foreground text-sm font-medium">Join Nepal&apos;s fastest growing multi-vendor marketplace today.</p>
            </div>

            {error && (
                <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-2xl text-sm font-bold flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    {error}
                </div>
            )}

            <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">First Name</label>
                        <input name="firstName" type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Last Name</label>
                        <input name="lastName" type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                    <input name="email" type="email" placeholder="john@doe.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm" required />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Password</label>
                    <input name="password" type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm" required />
                </div>

                <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" className="mt-1 accent-primary" required />
                    <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                        I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                    </label>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg shadow-xl shadow-primary/20" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Free Account"}
                </Button>
            </form>
        </div>
    );
}
