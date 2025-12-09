"use server"

import  CreateTable  from "@/lib/database"
import bcrypt from "bcrypt"
import { error } from "console"

export async function RegisterUSER(prevState:any,formdata:FormData){

    try{

        const username=formdata.get("fullname") as string
        const email=formdata.get("email") as string
        const password=formdata.get("password") as string

        if(username.length === 0){
            return {usernameerror:"field cannot be empty",val:{email,password}}
        }

        if(email.length === 0){
            return {emailerror:"field cannot be empty",val:{username,password}} 
        }

        if(password.length===0){
            return {passworderror:"field cannot be empty",val:{username,email}}
        }
        if(password.length < 8){
            return {passworderror:"password must be 8 charecters long",val:{username,email}}
        }
        
        const hashpassword=await bcrypt.hash(password,10)


    
        const db=await CreateTable()
        await db.run('INSERT INTO users (username,email,password) VALUES (?,?,?)',[username,email,hashpassword])
        await db.close()
    }catch(error){
        console.log(error)
    }
}