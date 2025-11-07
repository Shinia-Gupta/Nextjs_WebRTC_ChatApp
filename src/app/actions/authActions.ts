"use server"
import { signOut } from "@/lib/auth"
import { redirect } from "next/navigation";

export async function handleSignout(){
              await signOut({ redirect: false });
              redirect("/login")
    
}