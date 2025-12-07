"use server"

import { CreateTable } from "@/lib/database"

export async function RegisterUSER(formdata:FormData) {

    try{

        const username=formdata.get("fullname")
        const email=formdata.get("email")
        const password=formdata.get("password") 
    
        const db=await CreateTable()
        await db.run('INSERT INTO users (username,email,password) VALUES (?,?,?)',[username,email,password])
        console.log("data inserted successfully!!")
        await db.close()
    }catch(error){
        console.log(error)
    }
}