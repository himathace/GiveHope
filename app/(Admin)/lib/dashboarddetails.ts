import CreateTable from "@/lib/database"
import { get } from "http"


export default async function getPendingApplicationsCount(){
    const db=await CreateTable()
    const pendingcount=await db.get("select count(*) as pendingcount from ngo_applications where application_status='pending'")
    return pendingcount?.pendingcount
    
}

export async  function getApprovedNGOsCount(){
    const db=await CreateTable()
    const approvedcount=await db.get("select count(*) as approvedcount from ngo_applications where application_status='approved'")
    return approvedcount?.approvedcount
}

export async function getTotalUsersCount(){
    const db=await CreateTable()
    const usercount=await db.get("select count(*) as usercount from users")
    return usercount?.usercount
}

export async function getPendingApplicationDetails(){
    const db=await CreateTable()
    const applications=await db.all("select u.username, ap.* from ngo_applications ap inner join users u on ap.user_id=u.id where ap.application_status='pending'")
    return applications ? JSON.parse(JSON.stringify(applications)) : []
}
 export async function getapprovedapplicationDetails(){
    const db=await CreateTable()
    const applications=await db.all("select * from ngo_applications where application_status='approved' or application_status='rejected'")
    return applications ? JSON.parse(JSON.stringify(applications)) : []
    
 }