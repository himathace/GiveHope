import { Heart } from 'lucide-react';
import Image from "next/image";
import { Users } from 'lucide-react';
import { MapPin } from 'lucide-react';




export default async function ExploreNGOpage(){

    
    
    return(

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

                    <div className="border border-gray-300 rounded-2xl">
                        <div className="w-full h-48 relative">
                            <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
                        </div>
                        <div className="p-5">
                            <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                            <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
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
                            <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-2xl">
                        <div className="w-full h-48 relative">
                            <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
                        </div>
                        <div className="p-5">
                            <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                            <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
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
                            <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
                        </div>
                    </div>
                    
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className='px-10 py-2 rounded-xl bg-white border border-teal-500 text-teal-500'>Load More NGOs</button>
                </div>
            </div>

            
            
        </div>
        
    )
}