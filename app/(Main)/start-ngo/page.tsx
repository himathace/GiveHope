import { Heart } from "lucide-react"
import { Newspaper } from 'lucide-react';
import { getsession } from "@/lib/auth";


export default async function StartNGO(){

    const session=await getsession()
    if(!session){
        return (
            <div className="flex justify-center mt-30">
                <div className="border border-gray-500 p-10 flex flex-col items-center justify-center rounded-2xl">
                    <Newspaper size={60} className="p-3 text-teal-500 bg-slate-200 rounded-full" />
                    <h1 className="mt-5 text-2xl font-times font-medium">Sign In Required</h1>
                    <p className="mt-2  text-gray-600">Please sign in or create an account to submit your NGO </p>
                    <p className="  text-gray-600">application.</p>
                    <button className="mt-5 bg-teal-500 text-sm text-white p-2 rounded-xl">Sign in / Sign Up</button>
                </div>
            </div>

        )
    }


    return (
        <div className="mt-30 flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Heart size={60} className="bg-teal-500 text-white p-4 rounded-2xl" />
                <p className="mt-5 text-4xl font-times">Start Your NGO Journey</p>
                <p className="text-sm mt-3 text-gray-500">Fill out the form below to register your organization. Our team will </p>
                <p className="text-sm text-gray-500"> review your application and get back to you shortly.</p>
            </div>
            <div className="w-2/4 mt-10 border border-gray-400 p-5 rounded-2xl">
                <div className="flex gap-x-3 items-center">
                    <Newspaper size={18} className="text-teal-600" />
                    <p className="text-xl font-times">NGO Application Form</p>
                </div>
                <p className="text-sm  text-gray-600">All fields marked with * are required</p>
                <p className="mt-5 text-lg font-times">Basic Information</p>
                <hr className="text-gray-300 mt-1"></hr>
                <p className="mt-3 text-sm">NGO Name *</p>
                <input type="text" className="mt-2 w-full rounded-md h-7 border border-gray-400"></input>
                <p className="mt-3 text-sm">Category *</p>
                <select className="mt-2 w-full rounded-md h-7 border border-gray-500">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                </select>
                <p>Description *</p>
                <textarea></textarea>
                <p>Mission Statement *</p>
                <textarea></textarea>
                <p>Contact Information</p>
                <hr></hr>
                <div>
                    <p>Email *</p>
                    <input />
                    <p>phone</p>
                    <input />
                </div>
                <p>Website</p>
                <input type="text"/>
                <p>Location</p>
                <hr></hr>
                <p>Address *</p>
                <input type="text"></input>
                <div>
                    <p>city</p>
                    <input type="text"/>
                    <p>Country</p>
                    <input type="text"/>
                </div>
                <p>Registration Details</p>
                <hr></hr>
                <p>Registration Number (Optional)</p>
                <input type="text"/>
                <button>Submit Application</button>
            </div>
        </div>
    )
}