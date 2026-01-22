import { SignupForm } from "@/components/auth/signup-form";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="space-y-8">
            <SignupForm />

            <div className="text-center text-sm text-muted-foreground">
                Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </div>
        </div>
    );
}
