"use server"

import CreateTable from "@/lib/database"

export async function approveApplication(applicationId:number,userid:number,title:string,location:string,country:string,category:string,description:string,email:string,phone:string,mission:string,website:string,address:string){
    const db=await CreateTable()
    await db.run("update ngo_applications set application_status='approved' where id=?",[applicationId])
    await db.run("update users set role='ngoadmin' where id=?",[userid])
    await db.run("insert into ngo_profile (title,description,mission_statement,user_id,category,email,phone,website,address,city,country) values(?,?,?,?,?,?,?,?,?,?,?) ",[title,description,mission,userid,category,email,phone,website,address,location,country])
}

export async function rejectApplication(applicationId:number){
    const db=await CreateTable()
    await db.run("update ngo_applications set application_status='rejected' where id=?",[applicationId])
}