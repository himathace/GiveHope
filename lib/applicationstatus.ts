import CreateTable from "./database";
import {getsession} from "../lib/auth";

export default async function getApplicationStatus(){
    const db=await CreateTable()
    const session=await getsession()
    if(!session){
        return null
    }
    const userid=(session as any).userid
    const status=db.all("select application_status from ngo_applications where user_id=?",[userid])
    console.log(status)
    return status
}