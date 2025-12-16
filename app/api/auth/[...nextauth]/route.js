import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials"
import CreateTable from "@/lib/database"
import bcrypt from "bcrypt"
import {email, z} from "zod"
import { use } from "react";



const authoptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            async  authorize(Credentials){

                if(!Credentials?.email || !Credentials?.password){
                    return null
                }
    
                const db=await CreateTable()

                const user=await db.get("select email,password from users where email=?",[Credentials.email])
                console.log(user)

                if(!user){
                    return null
                }

                const isvalidpassword=await bcrypt.compare(Credentials.password,user.password)
                if(!isvalidpassword){
                    return null
                }

                return {username:user.username,email:user.email}
            }
        }),
    ],
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/login"
    },
    secret:process.env.SERECT_KEY

}

const handler=NextAuth(authoptions)
export {handler as GET,handler as POST}

