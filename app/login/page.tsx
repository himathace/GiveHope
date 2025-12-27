"use client"

import { Heart } from 'lucide-react';
import { useState } from 'react';
import registeruser from './RegisterAction';



export default  function Login(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [validations,setvalidations]=useState("")

    // async function senddata(){

        // const results=await signIn("credentials",{
        //     email:email,
        //     password:password,
        //     redirect:false
        // })
        // if(results?.error){
        //     setvalidations("Invalid Email or Password")
        //     // Clear input fields on validation error
        //     setemail("")
        //     setpassword("")
        // }
        // else if(results?.ok){
        //     // Clear validation errors on success
        //     // setvalidations("")
        //     alert("welcome")
        // }

    //     const userdata=await fetch("/api/auth/login",{
    //         method:"POST",
    //         headers:{
    //             "content-type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             email:email,
    //             password:password
    //         })
    //     })
    //     const data=await userdata.json()
        
    //     if(data.success){
    //         window.location.href = "/"
    //     } else {
    //         setvalidations(data.message)
    //     }
    // }



    return(

        <form action={registeruser}>
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
                    <input type='text' name='email'  className={` "border border-red-500 placeholder:text-red-500 text-sm" } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`}  />
                    <p className='mt-3'>Password</p>
                    <input type='password' name='password'  className={` "border border-red-500 placeholder:text-red-500 text-sm" } font-light mt-2 border border-gray-500 h-9 rounded-lg px-2`}/>
                    <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium'>Sign in</button>
                    <p className='mt-2 text-sm text-gray-500 flex justify-center gap-x-2'>Dont have an account <span className='text-teal-500'>sign up</span> </p>
                </div>
            </div>
        </form>
    )
}