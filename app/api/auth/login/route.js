import { NextRequest } from "next/server";
import CreateTable from "@/lib/database"
import bcrypt from "bcrypt"
import {signtoken} from "../../../../lib/jwt"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function POST(req) {

    const db=await CreateTable()

    const body=await req.json()
    const email=body.email
    const password=body.password

    if(!email || !password){
        return Response.json({message:"Feild cannot be empty"})
    }

    const user=await db.get("select username,email,password from users where email=?",[email])

    if(!user){
        return Response.json({message:"Invalid username or password"})
    }

    const isvalidpassword=await bcrypt.compare(password,user.password)
    if(!isvalidpassword){
        return Response.json({message:"Invalid email or password"})
    }

    const token=signtoken({username:user.username,email:user.email})

    const cookiestore=await cookies()
    cookiestore.set("AUTH",token,{
        httpOnly:true,
        sameSite:"strict",
        maxAge:60*69*24
    })

    return Response.json({message:"login successful", success: true})












}