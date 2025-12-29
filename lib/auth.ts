import { cookies } from "next/headers"
import { redis } from "./redis"
import CreateTable from "./database"

export async function getsession() {
    const cookieStore = await cookies()
    const sessionid = cookieStore.get("session")?.value
    if(!sessionid) return null

    const session=await redis.get(`session: ${sessionid}`)
    return session
}

export async function getuserdetails(userid:string) {
    const db=await CreateTable()
    const user=await db.get("select username,email from users where id=?",[userid])
    return user
}

