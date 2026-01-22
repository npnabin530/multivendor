import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, password } = await req.json();

        if (!email || !password || !firstName) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: "Email already taken" }, { status: 400 });
        }

        const user = await prisma.user.create({
            data: {
                name: `${firstName} ${lastName}`,
                email,
                password, // Reminder: Hash passwords in production!
                role: "CUSTOMER", // Default role
            },
        });

        return NextResponse.json({ message: "User created successfully", user: { email: user.email } }, { status: 201 });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
