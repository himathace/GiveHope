import CreateTable from "./database";

export default async function getStroiesList(){
    const db=await CreateTable()
    const ngo=db.all("select * from ngo_stroies")
    return ngo
    
}