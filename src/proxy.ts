import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(req:NextRequest){
    const session=await auth();
    const url=new URL(req.url);
    const {pathname}=req.nextUrl;
console.log("path---",pathname);

     // Prevent logged-in users from seeing login/register
  if (session && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard (only for logged-in users)
  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

    return NextResponse.next();


}

export const config={
    matcher:["/login","/register","/dashboard/:path"]
}