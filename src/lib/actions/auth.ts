"use server";

export async function signupAction(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password || !firstName) {
        return { error: "Missing required fields" };
    }

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/auth/signup`, {
            method: "POST",
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.error || "Signup failed" };
        }

        return { success: true };
    } catch {
        return { error: "Something went wrong" };
    }
}
