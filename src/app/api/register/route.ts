import clientPromise from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try {
        const {name,email,password}=await req.json();
        if(!name||!email||!password){
            return NextResponse.json({error:"All fields required!"},{status:400})
        }

        const client=await clientPromise;
        const db=client.db();

        const existing=await db.collection("users").findOne({email})
        if(existing){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        const hashedpassword=await bcrypt.hash(password,10);
        await db.collection("users").insertOne({
            name,email,password:hashedpassword
        })

        return NextResponse.json({message:"User registered successfully"},{status:201})
    } catch (error) {
        console.log("Register error - ",error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
 
    }
}