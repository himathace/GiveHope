import CreateTable from "./database";


export default async function getcampaignsList() {
    const db=await CreateTable()
    const campaigns=db.all("select * from ngo_campains")
    return campaigns
    
}