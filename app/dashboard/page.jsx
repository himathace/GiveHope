import { cookies } from "next/headers"
import {getsession} from "../../lib/auth"
import { getuserdetails } from "../../lib/auth"
import LogoutButton from "../components/logout"



export default async function Dashboard(){

    const sesssion=await getsession()
    if(!sesssion){
        return <h1 className="h-screen flex items-center">not authenticated ????</h1>
    }

    const user=await getuserdetails(sesssion.userid)

    return(

        <div className="h-screen flex items-center">
            <h1>hello {user.username}</h1>
            <LogoutButton />

        </div>

    )
}