"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from 'axios'
import { showToast } from "@/components/toasts"

export default function RegisterPage() {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const router = useRouter();


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { name, email, password } = user;
            await axios.post("/api/register", {
                name,
                email,
                password
            })
            showToast("success", "User registered successfully")
            router.push("/login")
        } catch (error: any) {
            console.log("User unregistered- ", error);

            showToast("error", error.message)

        }

    }
    return (
        <form onSubmit={handleRegister} className="flex flex-col gap-3 p-8 max-w-sm mx-auto">
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="border p-2 rounded"
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="border p-2 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-green-600 text-white p-2 rounded">
                Register
            </button>
        </form>
    );
}