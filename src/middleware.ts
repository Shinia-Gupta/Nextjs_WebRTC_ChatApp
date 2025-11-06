import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(req:Request){
    const session=await auth();
    const url=new URL(req.url);
    const path=url.pathname;

     // Prevent logged-in users from seeing login/register
  if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard (only for logged-in users)
  if (!session && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

    return NextResponse.next();


}

export const config={
    matcher:["/login","/register","/dashboard/:path"]
}