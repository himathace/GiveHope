import { cookies } from 'next/headers';
import { verifyToken } from "@/lib/jwt";
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { getsession } from '@/lib/auth';
import {getuserdetails} from "../../lib/auth"
import LogoutButton from './logout';

export default async function NavBar(){

    const session = await getsession();
    const details = session ? await getuserdetails((session as any).userid) : null;

    return(
        <div className="flex justify-between items-center py-3 px-20 fixed left-0 right-0 top-0 bg-slate-100 z-50 border-b border-gray-200">
            <div className="flex gap-x-2 items-center">
                <div className="bg-linear-to-r from-teal-600 to-teal-500 p-2 rounded-full">
                    <Heart className="text-white" />
                </div>
                <p className="text-xl font-bold font-times">ImpactHub</p>
            </div>
            <div className="flex gap-x-6 text-gray-600 font-medium">
                <Link href={"/explore"} >
                    <p>Explore</p>
                </Link>
                <Link href={"/campaigns"}>
                    <p>Campaigns</p>
                </Link>
                <Link href={"/stories"}>
                    <p>Stories</p>
                </Link>
                <Link href={"/about"}>
                    <p>About</p>
                </Link>
            </div>
            <div className="flex gap-x-3">
                {!session ? (
                    <Link href="/login" className="bg-white px-5 py-2 border border-gray-300 flex items-center justify-center rounded-lg text-sm font-semibold">sign in</Link>
                ) : 

                <>
                    <button className='font-serif text-sm'>{details?.username}</button>
                    <LogoutButton/>
                </>
                
                
                }
                
                <Link  href="/start-ngo">
                    <button className="bg-white px-5 py-2 border text-sm font-semibold flex items-center justify-center rounded-lg bg-linear-to-r from-teal-600 to-teal-500 text-white">Start an Ngo</button>
                </Link>
            </div>
        </div>
    )
}