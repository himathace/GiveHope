import CreateTable from "./database";

export default async function getNgoList(){
    const db=await CreateTable()
    const ngo=db.all("select * from ngo_profile")
    return ngo
    
}