import getStroiesList from "@/lib/getstroieslist"
import Card from "@/app/components/ngocard"

export default async function StroiesList(){

    const list = await getStroiesList()

    return(

        <div>
            <div className='mt-25 mx-20'>
                <div className='flex flex-col items-center'>
                    <p className='text-5xl font-serif font-semibold'>Stories of Impact</p>
                    <p className='text-gray-500 font-medium text-lg mt-2'>Read inspiring stories from NGOs and communities around the world</p>
                </div>
                <div className=' flex items-center mt-10 p-5 h-25 rounded-2xl gap-x-3'>
                    <input className='h-10 w-11/12 border border-gray-500 rounded-2xl'></input>
                    <select className='flex-1 h-10 rounded-xl'>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <p className='text-md text-gray-500'>Showing <span className='text-lg text-black font-medium'>6</span> organizations</p>
                    <select className='w-25 rounded-lg'>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {
                        list.map((NGO)=>(
                            <Card key={NGO.id} id={NGO.id} title={NGO.title} description={NGO.author} />
                        ))
                        
                    }
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className='px-10 py-2 rounded-xl bg-white border border-teal-500 text-teal-500'>Load More NGOs</button>
                </div>
                
            </div>
        </div>

    )
}