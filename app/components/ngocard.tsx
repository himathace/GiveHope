import Image from "next/image"
import { MapPin,Users } from "lucide-react"
import Link from "next/link"

type NGOtype={
    id:String,
    title:string,
    description:String
}

export default function Card({id,title,description}:NGOtype){
    return(

        <div className="border border-gray-300 rounded-2xl">
            <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
            </div>
            <div className="p-5">
                <p className="text-xl font-serif font-medium">{title}</p>
                <p className="text-md text-gray-600 text-sm " >{description}</p>
                <div className="flex justify-between mt-3" >
                <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                </div>
                <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                </div>
                </div>
                <Link  href={`ngo/${id}`}>
                    <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
                </Link>
            </div>
        </div>
    )
}