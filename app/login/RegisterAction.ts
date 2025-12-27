"use server"

import z from "zod"
import CreateTable from "@/lib/database"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import crypto from "crypto"
import { cookies } from "next/headers"

const userschema=z.object({
    email:z.string().min(1,"Field cannot be empty"),
    password:z.string().min(1,"Field cannot be empty")
})

const sessions=[]

export default async function registeruser(formdata:FormData) {

    const db=await CreateTable()

    const email=formdata.get("email") as string
    const password=formdata.get("password") as string

    if(!email || !password){
        return console.log("Field cannot be empty")
    }
    
    const user=await db.get("select * from users where email=?",[email])
    console.log(user)

    if(!user){
        return console.log("Invalid username or password")
    }
    
    const isvalidpassword=await bcrypt.compare(password,user.password)
    if(!isvalidpassword){
        return console.log("Invalid email or password")
    }

    console.log("login successfull")

    const sessionid=crypto.randomUUID()
    await db.run('INSERT INTO sessioninfo (session_id,user_id) VALUES (?,?)',[sessionid,user.id])
    const cookieStore = await cookies()
    cookieStore.set("session",sessionid,{
        httpOnly:true,
        secure:true,
        sameSite:"lax",
        
    })
}