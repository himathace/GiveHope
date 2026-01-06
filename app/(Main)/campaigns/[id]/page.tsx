import Image from "next/image"
import getcampaignsProfile from "@/lib/getcampaignsprofile"

export default async function CampaignsProfile({params}: {params: {id: string}}){

    const {id}=await params
    const camprofile=await getcampaignsProfile(id)

    return(
        <div className="flex flex-col bg-slate-100">
            <p className="text-sm mt-25 mx-10">Back to Campaigns</p>
            <div className="h-100 relative mx-10 mt-2">
                <Image src="/explore.jpg" alt="image" fill className="absolute object-cover rounded-4xl" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-4xl"></div>
                <div className="absolute bottom-0 mx-5 my-10">
                    <div className="flex">
                        <p>Environment</p>
                        <p>verified</p>
                    </div>
                    <p className="text-white text-5xl font-times font-bold">{camprofile.title}</p>
                    <p className="text-slate-300 text-lg font-serif">{camprofile.description}</p>
                </div>
            </div>
            <div className="flex bg-slate-100">

                <div className="flex-2 m-10 gap-y-5 flex flex-col">

                    <div className="shadow p-5 rounded-2xl bg-white">
                        <p className="text-2xl font-serif font-medium">About us</p>
                        <p className="text-slate-600 mt-2 font-normal">{camprofile.about}</p>
                        
                    </div>
                    <div className="shadow p-5 rounded-2xl bg-white">
                        <p className="text-2xl font-serif font-medium">Active Campaigns</p>
                        <p>Ocean Guardians is a non-profit organization dedicated to preserving our oceans and marine life. Founded in 2010, we have been at the forefront of marine conservation, working with local communities, scientists, and policymakers to protect vulnerable marine ecosystems. Our initiatives include beach cleanups, coral reef restoration, marine wildlife protection programs, and educational outreach to schools and communities.</p>
                        
                    </div>
                    <div className="shadow p-5 rounded-2xl bg-white">
                        <p className="text-2xl font-serif font-medium">Our Stories</p>
                        <p>Ocean Guardians is a non-profit organization dedicated to preserving our oceans and marine life. Founded in 2010, we have been at the forefront of marine conservation, working with local communities, scientists, and policymakers to protect vulnerable marine ecosystems. Our initiatives include beach cleanups, coral reef restoration, marine wildlife protection programs, and educational outreach to schools and communities.</p>
                        
                    </div>
                </div>
                <div className="flex-1 mt-10 mr-10 ">

                    <div className="shadow p-5 rounded-2xl bg-white">
                        <p>About us</p>
                        <p>Ocean Guardians is a non-profit organization dedicated to preserving our oceans and marine life. Founded in 2010, we have been at the forefront of marine conservation, working with local communities, scientists, and policymakers to protect vulnerable marine ecosystems. Our initiatives include beach cleanups, coral reef restoration, marine wildlife protection programs, and educational outreach to schools and communities.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}