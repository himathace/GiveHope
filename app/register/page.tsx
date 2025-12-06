import { Heart } from 'lucide-react';


export default function Register(){
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
                <p className='mt-5'>Full Name</p>
                <input type='text' className='mt-2 border border-gray-500 h-9 rounded-lg'/>
                <p className='mt-3'>Email</p>
                <input type='text' className='mt-2 border border-gray-500 h-9 rounded-lg'/>
                <p className='mt-3'>Password</p>
                <input type='password' className='mt-2 border border-gray-500 h-9 rounded-lg' />
                <button className='mt-5 bg-linear-to-r from-teal-600 to-teal-500 h-10  rounded-xl text-sm text-white font-medium'>Create Account</button>
                <p className='mt-2 text-sm text-gray-500 flex justify-center'>Dont have an account sign in</p>
            </div>
        </div>
    )
}