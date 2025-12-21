import { Heart } from 'lucide-react';
import Image from "next/image";
import { Users } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { cookies } from 'next/headers';
import { verifyToken } from "@/lib/jwt";

export default async function ExploreNGOpage(){

    const cookieStore = await cookies();
    const token = cookieStore.get("AUTH")?.value;
    const user = token ? verifyToken(token) : null;
    const username = user && typeof user !== 'string' ? user.username : null;
    console.log(username)
    
    return(

        <div>
            <div className="flex justify-between items-center py-3 px-20 fixed left-0 right-0 top-0 bg-slate-100 z-50 border-b border-gray-200">
                <div className="flex gap-x-2 items-center">
                    <div className="bg-linear-to-r from-teal-600 to-teal-500 p-2 rounded-full">
                        <Heart className="text-white" />
                    </div>
                    <p className="text-xl font-bold font-times">ImpactHub</p>
                </div>
                <div className="flex gap-x-6 text-gray-600 font-medium">
                <p>Explore</p>
                <p>Campaigns</p>
                <p>Stories</p>
                <p>About</p>
                </div>
                <div className="flex gap-x-3">

                    {
                        username ? 

                        <button className="bg-white px-5 py-2 border border-gray-300 flex items-center justify-center rounded-lg text-sm font-semibold">{username}</button> :

                        <button className="bg-white px-5 py-2 border border-gray-300 flex items-center justify-center rounded-lg text-sm font-semibold">Sign in</button>
                    }
                    <button className="bg-white px-5 py-2 border text-sm font-semibold flex items-center justify-center rounded-lg bg-linear-to-r from-teal-600 to-teal-500 text-white">Start an Ngo</button>
                </div>
            </div>
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
            <div>
                <div className='flex  mt-10 p-10 justify-between items-center text-white bg-blue-950'>
                    <div>
                        <p className='text-xl font-serif'>Stay Updated</p>
                        <p className='text-gray-300'>Get the latest stories and campaigns delivered to your inbox.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <input type='text' className='h-10 rounded-xl'/>
                        <button className='px-10 py-2 bg-orange-500 rounded-xl'>subscribe</button>
                    </div>
                </div>
                <div className='flex p-10 justify-between items-center text-white bg-blue-950'>
                    <div>
                        <p className='text-xl font-serif'>Stay Updated</p>
                        <p className='text-gray-300'>Get the latest stories and campaigns delivered to your inbox.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <input type='text' className='h-10 rounded-xl'/>
                        <button className='px-10 py-2 bg-orange-500 rounded-xl'>subscribe</button>
                    </div>
                </div>
                <div className='flex p-10 justify-between items-center text-white bg-blue-950'>
                    <div>
                        <p className='text-xl font-serif'>Stay Updated</p>
                        <p className='text-gray-300'>Get the latest stories and campaigns delivered to your inbox.</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <input type='text' className='h-10 rounded-xl'/>
                        <button className='px-10 py-2 bg-orange-500 rounded-xl'>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}