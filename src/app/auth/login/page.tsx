import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="space-y-8">
            <LoginForm />

            <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest leading-none bg-transparent">
                    <span className="px-4 text-muted-foreground">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl py-3 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.312 2.696-6.892 2.696-5.552 0-9.848-4.496-9.848-10.048s4.296-10.048 9.848-10.048c3.112 0 5.392 1.232 7.072 2.824l2.304-2.304C18.616 1.44 15.824 0 12.48 0 6.504 0 1.624 4.88 1.624 10.852s4.88 10.852 10.856 10.852c3.216 0 5.64-1.064 7.512-3.032 1.936-1.936 2.544-4.664 2.544-6.88 0-.664-.04-1.288-.128-1.872z" /></svg>
                    <span className="text-xs font-bold">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl py-3 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                    <span className="text-xs font-bold">Mobile</span>
                </button>
            </div>

            <div className="text-center text-sm text-muted-foreground mt-8">
                New here? <Link href="/auth/signup" className="text-primary font-bold hover:underline">Create an account</Link>
            </div>
        </div>
    );
}
