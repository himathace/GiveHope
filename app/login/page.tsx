"use client"

import { Heart } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';


export default  function Login(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    async function senddata(){

        const results=await signIn("credentials",{
            email:email,
            password:password,
            redirect:false
        })
        if(results?.error){
            alert("invalid data")
        }
        else{
            alert("hello")
        }
    }



    return(
        <div className='h-screen flex items-center justify-center'>
            <div className='shadow p-6 flex flex-col w-2/7 rounded-2xl bg-white'>
                <div className='flex justify-center'>
                    <div className='bg-teal-600 justify-center p-3 rounded-2xl'>
                        <Heart  className='text-white ' size={30}/>
                    </div>
                </div>
                <p className='mt-5 flex justify-center text-3xl font-times'>Welcome Back</p>
                <p className='text-sm text-gray-600 flex justify-center'>Sign in to continue your journey</p>
                <p className='mt-5'>Email</p>
                <input type='text' className='mt-2 border border-gray-500 h-9 rounded-lg' onChange={(e)=>setemail(e.target.value)}/>
                <p className='mt-3'>Password</p>
                <input type='password' className='mt-2 border border-gray-500 h-9 rounded-lg' onChange={(e)=>setpassword(e.target.value)} />
                <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium' onClick={()=>{senddata()}}>Sign in</button>
                <p className='mt-2 text-sm text-gray-500 flex justify-center'>Dont have an account sign up</p>
            </div>
        </div>
    )
}