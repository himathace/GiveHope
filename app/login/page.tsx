"use client"

import { Heart } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';



export default  function Login(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [validations,setvalidations]=useState("")

    async function senddata(){

        const results=await signIn("credentials",{
            email:email,
            password:password,
            redirect:false
        })
        if(results?.error){
            setvalidations("Invalid Email or Password")
            // Clear input fields on validation error
            setemail("")
            setpassword("")
        }
        else if(results?.ok){
            // Clear validation errors on success
            // setvalidations("")
            alert("welcome")
        }
    }



    return(
        <div className='h-screen flex items-center justify-center bg-slate-50'>
            <div className='shadow p-6 flex flex-col w-2/7 rounded-2xl bg-white'>
                <div className='flex justify-center'>
                    <div className='bg-teal-600 justify-center p-3 rounded-2xl'>
                        <Heart  className='text-white ' size={30}/>
                    </div>
                </div>
                <p className='mt-5 flex justify-center text-3xl font-times'>Welcome Back</p>
                <p className='text-sm text-gray-600 flex justify-center'>Sign in to continue your journey</p>
                <p className='mt-5'>Email</p>
                <input type='text' name='fullname'  className={`${validations && "border border-red-500 placeholder:text-red-500 text-sm" } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${validations ? validations : "You@gmail.com"}`} onChange={(e)=>setemail(e.target.value)} value={email} />
                <p className='mt-3'>Password</p>
                <input type='password' name='fullname'  className={`${validations && "border border-red-500 placeholder:text-red-500 text-sm" } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`} placeholder={` ${validations ? validations : "**********"}`} onChange={(e)=>setpassword(e.target.value)} value={password} />
                <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium' onClick={()=>{senddata()}}>Sign in</button>
                <p className='mt-2 text-sm text-gray-500 flex justify-center gap-x-2'>Dont have an account <span className='text-teal-500'>sign up</span> </p>
            </div>
        </div>
    )
}