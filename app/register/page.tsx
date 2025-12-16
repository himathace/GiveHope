"use client"

import { Heart } from 'lucide-react';
import { RegisterUSER} from './registeruser';
import { useActionState } from 'react';

export default function Register(){

    const [state,register,pending]=useActionState(RegisterUSER,null)
    
    return(
        <div className='h-screen flex items-center justify-center bg-slate-50'>
            <div className='shadow-sm p-6 flex flex-col w-2/7 rounded-2xl bg-white'>
                <div className='flex justify-center'>
                    <div className='bg-teal-600 justify-center p-3 rounded-2xl'>
                        <Heart  className='text-white ' size={30}/>
                    </div>
                </div>
                <p className='mt-5 flex justify-center text-3xl font-times'>Join ImpactHub</p>
                <p className='text-sm text-gray-600 flex justify-center'>Create an account to start making an impact</p>
                <form action={register}  className='flex flex-col'>
                    <p className='mt-5'>Full Name</p>
                    <input type='text' name='fullname' defaultValue={state?.error?.hasOwnProperty("username") ? "" : state?.userdata.UserName} className={`${state?.error?.username && "border border-red-500 placeholder:text-red-500 text-sm" } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.error?.username ? state.error.username[0] : "John Doe"}`} />
                    <p className='mt-3'>Email</p>
                    <input type='text' name='email' defaultValue={state?.error?.hasOwnProperty("email") ? "" : state?.userdata.Email} className={`${state?.error?.email && "border border-red-500 placeholder:text-red-500 text-sm " } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.error?.email ? state.error.email[0] : "You@gmail.com"}`} />
                    <p className='mt-3'>Password</p>
                    <input type='password' name='password' defaultValue={state?.error?.hasOwnProperty("password") ? "" : state?.userdata.Password}  className={`${state?.error?.password && "border border-red-500 placeholder:text-red-500 text-sm " } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${state?.error?.password ? state.error.password[0] : "*********"}`} />
                    <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium' type='submit' disabled={pending}>Create Account</button>
                </form>
                <p className='mt-2 text-sm text-gray-500 flex justify-center gap-x-2'>Dont have an account <span className='text-teal-500'>sign in</span> </p>
            </div>
        </div>
    )
}