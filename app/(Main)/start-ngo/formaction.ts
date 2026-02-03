"use server"

import { getsession } from "@/lib/auth"
import CreateTable from "@/lib/database"

export default async function  ApplicationFormAction(data:FormData){
    const ngoname=data.get("ngoname") as string
    const category=data.get("category") as string
    const description=data.get("description") as string
    const missionstatement=data.get("missionstatement") as string
    const email=data.get("email") as string
    const phone=data.get("phone") as string
    const website=data.get("website") as string
    const address=data.get("address") as string
    const city=data.get("city") as string
    const country=data.get("country") as string

    console.log({
        ngoname,
        category,
        description,
        missionstatement,
        email,
        phone,
        website,
        address,
        city,
        country
    })

    const session=await getsession()
    if(!session){
        console.log("not authenticated")
        return
    }

    //store ngo application in database with status as pending
    console.log(`storing ngo application for user id: ${(session as any).userid}`)
    const userid=(session as any).userid
    const db=await CreateTable()
    await db.run("insert into ngo_applications (user_id,ngo_name,ngo_category,ngo_description,mission_statement,contact_email,contact_phone,ngo_website,address,city,country) values (?,?,?,?,?,?,?,?,?,?,?)",
        [
            userid,
            ngoname,
            category,
            description,
            missionstatement,
            email,
            phone,
            website,
            address,
            city,
            country,
        ]
    ) 
    
    console.log("ngo application stored successfully")  





}