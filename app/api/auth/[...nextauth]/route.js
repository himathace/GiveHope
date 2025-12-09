import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials"
import CreateTable from "@/lib/database"
import bcrypt from "bcrypt"



const authoptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            async  authorize(Credentials){
    
                const db=await CreateTable()
    
                if(Credentials.email.length===0){
                    return null
                }
                if(Credentials.password.length===0){
                    return null
                }
    
                const checkemail=db.get("select * from users where email=?",[Credentials.email])
                if(!checkemail){
                    return null
                }
    
                const checkpassword=await bcrypt.compare(Credentials.password,checkemail.password)
                if(!checkpassword){
                    return null
                }
                return {message:"hello"}
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

