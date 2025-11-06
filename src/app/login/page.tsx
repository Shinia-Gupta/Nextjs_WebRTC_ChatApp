"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.ok) router.push("/dashboard");
        else alert("Invalid credentials");
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col gap-2 p-8">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Login
            </button>
            <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="bg-red-500 text-white p-2 rounded"
            >
                Sign in with Google
            </button>
        </form>
    );
}
