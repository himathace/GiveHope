import Image from "next/image"
import { MapPin,Users } from "lucide-react"
import Card from "@/app/components/ngocard"
import getNgoList from "@/lib/ngolist"


export default async function ExploreNGOs(){

    const list=await getNgoList()

    return (

         <div>
            <div className='mt-25 mx-20'>
                <div className='flex flex-col items-center'>
                    <p className='text-5xl font-serif font-semibold'>Explore NGOs</p>
                    <p className='text-gray-500 font-medium text-lg mt-2'>Discover organizations making a difference around the world</p>
                </div>
                <div className=' flex items-center mt-10 p-5 h-25 rounded-2xl gap-x-3'>
                    <input className='h-10 w-11/12 border border-gray-500 rounded-2xl'></input>
                    <select className='flex-1 h-10 rounded-xl'>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <p className='text-md text-gray-500'>Showing <span className='text-lg text-black font-medium'>6</span> organizations</p>
                    <select className='w-25 rounded-lg'>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {
                        list.map((NGO)=>(
                            <Card key={NGO.id} title={NGO.title} description={NGO.description} />
                        ))
                        
                    }
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className='px-10 py-2 rounded-xl bg-white border border-teal-500 text-teal-500'>Load More NGOs</button>
                </div>
            </div>

            
            
        </div>
        
    )
}