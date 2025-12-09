"use client"

import { Heart } from 'lucide-react';
import { RegisterUSER} from './registeruser';
import { useActionState } from 'react';

export default function Register(){

    const [state,register,pending]=useActionState(RegisterUSER,null)
    
    return(
        <div className='h-screen flex items-center justify-center'>
            <div className='shadow p-6 flex flex-col w-2/7 rounded-2xl bg-white'>
                <div className='flex justify-center'>
                    <div className='bg-teal-600 justify-center p-3 rounded-2xl'>
                        <Heart  className='text-white ' size={30}/>
                    </div>
                </div>
                <p className='mt-5 flex justify-center text-3xl font-times'>Join ImpactHub</p>
                <p className='text-sm text-gray-600 flex justify-center'>Create an account to start making an impact</p>
                <form action={register}  className='flex flex-col'>
                    <p className='mt-5'>Full Name</p>
                    <input type='text' name='fullname' defaultValue={state?.val.username} className={`${state?.usernameerror && "border border-red-500 placeholder:text-red-500 text-sm font-light" } mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.usernameerror ? state.usernameerror : "John Doe"}`} />
                    <p className='mt-3'>Email</p>
                    <input type='text' name='email' defaultValue={state?.val.email} className={`${state?.emailerror && "border border-red-500 placeholder:text-red-500 text-sm font-light" } mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.emailerror ? state.emailerror : "You@gmail.com"}`} />
                    <p className='mt-3'>Password</p>
                    <input type='text' name='password' className={`${state?.passworderror && "border border-red-500 placeholder:text-red-500 text-sm font-light" } mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.passworderror ? state.passworderror : "*********"}`} />
                    <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium' type='submit'>Create Account</button>
                </form>
                <p className='mt-2 text-sm text-gray-500 flex justify-center'>Dont have an account sign in</p>
            </div>
        </div>
    )
}