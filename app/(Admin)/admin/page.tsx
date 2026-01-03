import { getsession } from "@/lib/auth"
import { getuserdetails } from "@/lib/auth"

export default async function Admin(){

    const session=await getsession()
    if(!session){
        return <h1>not authenticated</h1>
    }

    if((session as any).role !== 'admin'){
        return <h1>not autherize</h1>
    }

    const user=await getuserdetails((session as any).userid)


    return(
        <>
            <h1>hello {user.username}</h1>
        </>
    )
}