export default function PocessedApplications({ngoname,city,country,status}:any){
    return(
        <div className="flex mt-3  bg-white rounded-2xl justify-between items-center p-5 shadow-md border border-gray-200   "> 
            <div className="flex flex-col">
                <p>{ngoname}</p> 
                <div className="flex gap-x-1 text-sm text-gray-600 ">   
                    <p>{city},</p>
                    <p>{country}</p>
                </div>
            </div>
            <div>
                <p className="text-sm bg-teal-700 text-white px-3 py-1 rounded-full font-medium">{status}</p>
            </div>
        </div>
    )
}