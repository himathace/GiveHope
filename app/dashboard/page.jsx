import { cookies } from "next/headers"



export default async function Dashboard(){

    const cookieStore = await cookies()
    const sessionid = cookieStore.get("session")?.value
    
    if(!sessionid){
        return <h1>not authenticated</h1>
    }

    
    return(
        <h1>hello</h1>
    )
}