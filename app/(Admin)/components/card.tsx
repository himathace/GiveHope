export default function PendingApplicationCard({title,location,country,category,description,email,phone,name}:any){
    return(
        <div className="bg-white p-5 rounded-2xl mt-5 border border-gray-500">
            <p className="text-2xl font-bold font-times">{title}</p>
            <p className="text-sm text-gray-500">From : {name}</p>
            <div className="flex gap-x-3 text-sm text-gray-600 ">
                <p>{location}</p>
                <p>{country}</p>
                <p>{category}</p>
            </div>
            <p className="mt-3 text-sm mb-3">{description}</p>
            <p className="text-sm text-gray-500">Email: {email}</p>
            <p className="text-sm text-gray-500">Phone: {phone}</p>
            <div className="mt-3">
                <button className="bg-green-500 text-white p-2 rounded-lg mr-3">Approve</button>
                <button className="bg-red-500 text-white p-2 rounded-lg">Reject</button>
            </div>
        </div>
    )
}