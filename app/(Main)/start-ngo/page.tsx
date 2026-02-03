import { Heart } from "lucide-react"
import { Newspaper } from 'lucide-react';
import { getsession } from "@/lib/auth";
import ApplicationFormAction from "./formaction";


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
        <form action={ApplicationFormAction}>
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
                        <p className="text-3xl font-times">NGO Application Form</p>
                    </div>
                    <p className="text-sm  text-gray-600">All fields marked with * are required</p>
                    <p className="mt-5 text-2xl font-times">Basic Information</p>
                    <hr className="text-gray-300 mt-1"></hr>
                    <p className="mt-3 text-md">NGO Name *</p>
                    <input type="text" className="mt-2 w-full  h-9 p-2 border border-gray-400 rounded-lg placeholder:text-sm " name="ngoname" placeholder="Enter your Ngo Name"></input>
                    <p className="mt-3 text-md">Category *</p>
                    <select className="mt-2 w-full  h-10 p-2 rounded-lg border border-gray-500 text-sm text-gray-600" name="category">
                        <option>Education</option>
                        <option>Health Care</option>
                        <option>Environment</option>
                    </select>
                    <p className="mt-3 text-md">Description *</p>
                    <textarea className="mt-3 w-full border border-gray-400 rounded-lg p-2 placeholder:text-sm" name="description" placeholder="Describe what your Ngo does(minimum 50 characters)"></textarea>
                    <p className="mt-3 text-md">Mission Statement *</p>
                    <textarea className="mt-3 w-full border border-gray-400 rounded-lg p-2 placeholder:text-sm" name="missionstatement" placeholder="Enter your mission statement"></textarea>
                    <p className="mt-5 text-2xl font-times">Contact Information</p>
                    <hr></hr>
                    <div className="flex gap-x-5 mt-4">
                        <div className="flex-1 ">
                            <p className="mt-3 text-md">Email *</p>
                            <input className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="email" />
                        </div>
                        <div className="flex-1 ">
                            <p className="mt-3 text-md">phone *</p>
                            <input className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="phone"/>
                        </div>
                    </div>
                    <p className="mt-3 text-md">Website</p>
                    <input type="text" className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="website"/>
                    <p className="mt-5 text-2xl font-times">Location</p>
                    <hr></hr>
                    <p className="mt-3 text-md">Address *</p>
                    <input type="text" className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="address"/>
                    <div className="flex gap-x-5 ">
                        <div className="flex-1 ">
                            <p className="mt-3 text-md">City *</p>
                            <input className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="city"/>
                        </div>
                        <div className="flex-1 ">
                            <p className="mt-3 text-md">Country *</p>
                            <input className="w-full h-10 rounded-md p-2 border border-gray-500 mt-2" name="country"/>
                        </div>
                    </div>
                    <button className="mt-10 bg-teal-500 text-white w-full h-12 rounded-xl" type="submit">Submit Application</button>
                </div>
            </div>
        </form>
    )
}