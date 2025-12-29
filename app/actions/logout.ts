"use server"

import { cookies } from "next/headers"
import { redis } from "@/lib/redis"

export async function logout() {

    const cookieStore = await cookies()
    const sessionid = cookieStore.get("session")?.value

    if(sessionid){
        await redis.del(`session: ${sessionid}`)
    }

    cookieStore.delete("session") 
}