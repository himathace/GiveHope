import CreateTable from "./database"

export default async function getNgoProfile(id:any) {
    const db=await CreateTable()
    const profile=db.get("select * from ngo_stroies where id=?",[id])
    return profile
}