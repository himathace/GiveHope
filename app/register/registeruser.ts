"use server"

import  CreateTable  from "@/lib/database"
import bcrypt from "bcrypt"
import { error } from "console"
import { userschema } from "./zod"
import { usertype } from "./zod"

export async function RegisterUSER(prevState:any,formdata:FormData){

    try{

        const username=formdata.get("fullname") as string
        const email=formdata.get("email") as string
        const password=formdata.get("password") as string
        const role="user"


        const userinsertdata:usertype={
            username:username,
            email:email,
            password:password
        }

        const data=userschema.safeParse(userinsertdata)
        if(!data.success){
            return({
                success:data.success,
                error:data.error?.flatten().fieldErrors,
                userdata:{
                    UserName:username,
                    Email:email,
                    Password:password
                }
            })
        }

        const db=await CreateTable()

        const existingUser = await db.get(
            "SELECT username, email FROM users WHERE username = ? OR email = ?",
            [username, email]
        );

        if (existingUser) {
            if (existingUser.username === username) {
                return({
                    success: false,
                    error: {
                        username: ["Username already taken"],
                        email: undefined,
                        password: undefined
                    },
                    userdata: {
                        UserName: username,
                        Email: email,
                        Password: password
                    }
                });
            }
            
            if (existingUser.email === email) {
                return({
                    success: false,
                    error: {
                        username: undefined,
                        email: ["Email already exists"],
                        password: undefined
                    },
                    userdata: {
                        UserName: username,
                        Email: email,
                        Password: password
                    }
                });
            }
        }

        const hashpassword=await bcrypt.hash(password,10)
        await db.run('INSERT INTO users (role,username,email,password) VALUES (?,?,?,?)',[role,username,email,hashpassword])
        await db.close()
    }catch(error){
        console.log(error)
    }
}