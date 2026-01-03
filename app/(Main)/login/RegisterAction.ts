"use server"

import z from "zod"
import CreateTable from "@/lib/database"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import crypto from "crypto"
import { cookies } from "next/headers"
import { redis } from "@/lib/redis"

const userschema=z.object({
    email:z.string().min(1,"Field cannot be empty"),
    password:z.string().min(1,"Field cannot be empty")
})

export default async function registeruser(prevState:any, formdata:FormData) {

    const db=await CreateTable()

    const email=formdata.get("email") as string
    const password=formdata.get("password") as string

    if(!email || !password){
        return {message:"Field cannot be empty !"}
    }
    
    const user=await db.get("select * from users where email=?",[email])
    console.log(user)

    if(!user){
        return {message:"Invalid username or password"}
    }
    
    const isvalidpassword=await bcrypt.compare(password,user.password)
    if(!isvalidpassword){
        return {message:"Invalid email or password"}
    }

    const sessiondata={
        userid:user.id,
        role:user.role
    }

    const sessionid=crypto.randomBytes(32).toString("hex")
    await redis.set(`session: ${sessionid}`,sessiondata,{ex:60*60*24})
    const cookieStore = await cookies()
    cookieStore.set("session",sessionid,{
        httpOnly:true,
        secure:true,
        sameSite:"lax",
    })
}