import CreateTable from "./database"

export default async function getcampaignsProfile(id:any) {
    const db=await CreateTable()
    const campro=db.get("select * from ngo_campains where id=?",[id])
    return campro
}