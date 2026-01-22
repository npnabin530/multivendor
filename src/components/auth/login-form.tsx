"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

export function LoginForm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid credentials");
                setLoading(false);
            } else {
                window.location.href = "/";
            }
        } catch (err) {
            setError("Something went wrong");
            setLoading(false);
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display font-bold mb-2 text-foreground">Welcome Back</h2>
                <p className="text-muted-foreground text-sm font-medium">Sign in to your account and explore the best deals from our verified sellers.</p>
            </div>

            {error && (
                <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-2xl text-sm font-bold flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    {error}
                </div>
            )}

            <form action={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email / Mobile</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="name@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white placeholder:text-zinc-600"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
                        <Link href="#" className="text-[10px] text-primary hover:underline font-bold uppercase">Forgot?</Link>
                    </div>
                    <input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white placeholder:text-zinc-600"
                        required
                    />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg shadow-xl shadow-primary/20" disabled={loading}>
                    {loading ? "Signing In..." : "Sign In"}
                </Button>
            </form>
        </div>
    );
}
