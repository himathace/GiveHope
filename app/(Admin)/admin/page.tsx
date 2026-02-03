import { getsession } from "@/lib/auth"
import { getuserdetails } from "@/lib/auth"
import { Form } from "lucide-react"
import getPendingApplicationsCount from "../lib/dashboarddetails"
import { getApprovedNGOsCount } from "../lib/dashboarddetails"
import { getTotalUsersCount } from "../lib/dashboarddetails"
import PendingApplicationCard from "../components/card"
import { getPendingApplicationDetails } from "../lib/dashboarddetails"

export default async function Admin(){

    const session=await getsession()
    if(!session){
        return <h1>not authenticated</h1>
    }

    if((session as any).role !== 'admin'){
        return <h1>not autherize</h1>
    }

    const user=await getuserdetails((session as any).userid)

    const pendingcount=await getPendingApplicationsCount()
    const approvedcount=await getApprovedNGOsCount()
    const usercount=await getTotalUsersCount()
    const applicationdetails=await getPendingApplicationDetails()
    console.log(applicationdetails)




    return(
        <div className="pt-25 px-20 bg-slate-100">
            <p className="text-3xl font-bold">Admin Dashboard</p>
            <p className="text-gray-600">Manage users and NGO applications</p>

            <div className="grid grid-cols-3 mt-10 gap-x-5">

                <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-md flex items-center">

                    <Form className="w-8 h-8 text-blue-500"/>
                    <div className="flex flex-col ml-3  ">
                        <p>{pendingcount}</p>
                        <p>pending Applications</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-md flex items-center">

                    <Form className="w-8 h-8 text-blue-500"/>
                    <div className="flex flex-col ml-3  ">
                        <p>{approvedcount}</p>
                        <p>Approved NGOs</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-md flex items-center">

                    <Form className="w-8 h-8 text-blue-500"/>
                    <div className="flex flex-col ml-3  ">
                        <p>{usercount}</p>
                        <p>Total Users</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-3 mt-10"> 
                <p>Ngo Applications</p>
                <p>users</p>
            </div>
            <p className="mt-5 text-2xl font-bold">Pending Applications</p>
            {
                pendingcount===0 ? 
                (
                   <div className="mt-3 bg-white border border-gray-400 p-10 rounded-2xl flex justify-center">
                        <p className="text-sm text-gray-600">No Pending Applications </p>
                    </div>

                ): 
                applicationdetails.map((app:any)=>(
                    <PendingApplicationCard 
                        key={app.id}
                        title={app.ngo_name}
                        location={app.city}
                        country={app.country}
                        category={app.ngo_category}
                        description={app.ngo_description}
                        email={app.contact_email}
                        phone={app.contact_phone}
                        name={app.username}
                    />
                ))
            }
            
            <p className="mt-5 text-2xl font-bold">Processed Applications</p>
            <div className="flex mt-3 border p-10 bg-white rounded-2xl justify-center border-gray-400">
                health care
                kadawath, dsada
            </div>
        </div>

    )
}