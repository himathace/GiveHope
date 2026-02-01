import Image from "next/image"
import getstroies from "@/lib/getstroies"

export default async function Stories({ params }: { params: { id: string } }){

    const { id } = await params
    const stroies=await getstroies(id)




    return(

        <div className="flex flex-col">
            <div className="h-150 relative">
                <Image src="/explore.jpg" alt="image" fill className="absolute object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 mx-100 my-10">
                    <div className="flex">
                        <p>Environment</p>
                        <p>verified</p>
                    </div>
                    <p className="text-white text-6xl font-times font-bold">How One Village Transformed Through Solar Energy</p>
                </div>
            </div>
            <div className="flex justify-center items-center">

                <div className=" w-5xl">
                    <div className="flex gap-x-5 my-10 p-5 pb-8 border-b border-gray-300  items-center">
                        <div className="bg-amber-200 rounded-full w-10 h-10"></div>
                        <div>
                            <p>Maria Santos</p>
                            <p>Program Director, SolarHope</p>
                        </div>
                        <p>January 15, 2026</p>
                        <p>5 min read</p>
                    </div>
                    <div>
                        A remarkable journey of sustainable development that brought electricity to 500 homes and changed lives forever in rural Tanzania.

                        When the first solar panel was installed in Mwanga village, nobody could have predicted the transformation that would follow. What started as a small pilot project has grown into a movement that has electrified over 500 homes and fundamentally changed how this community lives, works, and dreams.

                        The journey began three years ago when SolarHope partnered with local leaders to assess the village's energy needs. "We had no electricity," recalls village elder Amani Msafiri. "Children studied by candlelight, businesses closed at dusk, and our health clinic couldn't store vaccines properly."

                        Today, the village hums with activity well into the evening. Small businesses have extended their hours, a computer lab has been established at the local school, and the health clinic now operates 24/7 with reliable refrigeration for medicines.

                        The impact extends beyond just having light. Women who previously spent hours collecting firewood now have time for education and entrepreneurship. A local women's cooperative has started a tailoring business, using electric sewing machines to create school uniforms for the region.

                        "Solar energy didn't just give us light," says Maria, a cooperative member. "It gave us possibilities we never imagined."

                        The project has also created local jobs. Twenty young people from the village were trained as solar technicians, responsible for maintaining the installations and helping neighboring communities implement similar systems.

                        Looking ahead, SolarHope plans to expand to five more villages in the region, with the ultimate goal of creating an interconnected solar micro-grid that could power thousands of homes.

                        For the people of Mwanga, the future is bright—quite literally.
                    </div>

                </div>
            </div>

        </div>
    )
}