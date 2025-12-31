import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function Footer(){
    return(
        <div className='mt-10 bg-slate-800'>
            <div className='flex py-10 px-20 justify-between  text-white border-b border-gray-700'>
                <div>
                    <div className='flex gap-x-3'>
                        <Heart className='bg-teal-500 p-2 rounded-xl' size={34}/>
                        <p className='text-xl font-times font-bold'>ImpactHub</p>
                    </div>
                    <p className='mt-3 font-normal text-slate-300'>Connecting passionate people with NGOs making a difference. Together, we can create lasting change.</p>
                    <div className='flex gap-x-3 mt-5'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>
                <div>
                    <p className='text-xl font-times font-bold'>Platform</p>
                    <p className='mt-3 font-normal text-slate-300'>Explore NGOs</p>
                    <p className='mt-2 font-normal text-slate-300'>Campains</p>
                    <p className='mt-2 font-normal text-slate-300'>Stories</p>
                    <p className='mt-2 font-normal text-slate-300'>Events</p>
                </div>
                <div>
                    <p className='text-xl font-times font-bold'>For NGOS</p>
                    <p className='mt-3 font-normal text-slate-300'>Register</p>
                    <p className='mt-3 font-normal text-slate-300'>Dashboard</p>
                    <p className='mt-3 font-normal text-slate-300'>Resources</p>
                    <p className='mt-3 font-normal text-slate-300'>Pricing</p>
                </div>
                <div>
                    <p className='text-xl font-times font-bold'>Company</p>
                    <p className='mt-3 font-normal text-slate-300'>About us</p>
                    <p className='mt-3 font-normal text-slate-300'>Contact</p>
                    <p className='mt-3 font-normal text-slate-300'>Careers</p>
                    <p className='mt-3 font-normal text-slate-300'>Press</p>
                </div>
                <div>
                    <p className='text-xl font-times font-bold'>Legal</p>
                    <p className='mt-3 font-normal text-slate-300'>Privicy Policy</p>
                    <p className='mt-3 font-normal text-slate-300'>Termas of Services</p>
                    <p className='mt-3 font-normal text-slate-300'>Cookie Policy</p>
                </div>
            </div>
            <div className='flex  py-10 px-20  justify-between items-center text-white '>
                <p className='mt-3 font-normal text-slate-300'>© 2024 ImpactHub. All rights reserved.</p>
            </div>
        </div>

    )
}