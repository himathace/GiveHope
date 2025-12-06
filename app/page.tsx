import Image from "next/image";
import { Heart } from 'lucide-react';


export default function Home() {
  return (

    <div>

      <div className="flex justify-between items-center py-3 px-20 fixed left-0 right-0 top-0 bg-white z-50">
        <div className="flex gap-x-2 items-center">
          <div className="bg-linear-to-r from-teal-600 to-teal-500 p-2 rounded-full">
            <Heart className="text-white" />
          </div>
          <p className="text-xl font-bold font-times">GiveHope</p>
        </div>
        <div className="flex gap-x-6 text-gray-600 font-medium">
          <p>How it Works</p>
          <p>Campaigns</p>
          <p>Stories</p>
        </div>
        <div className="flex">
          <button>Sign in</button>
          <button>Start a Campain</button>
        </div>
      </div>

      <Image src="/hero-image.jpg" alt="hero image" className="object-cover opacity-20 z-1" fill></Image>

      <div className="relative inset-0 bg-linear-to-l from-white/0 to-white/95 z-5"></div>
      
      <div className="relative flex flex-col bg-linear-to-r from-white to-white/0 h-screen px-20 justify-center z-10" >

        <div className="bg-teal-100 w-fit px-4 py-1 rounded-full flex gap-x-2 items-center">
          <Heart size={15} className="text-teal-500" /> 
          <p className="text-sm font-bold text-teal-500">Join the movement for change</p>
        </div>
        <p className="mt-8 text-7xl font-bold font-times">Amplify Your <br /> <span className="bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Impact Together</span></p>
        <p className="mt-5 text-xl text-gray-500">Connect with passionate NGOs, discover inspiring campaigns, and be  <br />part of stories that change the world. Your journey to make a <br></br> difference starts here.</p>
        <div className="mt-5 gap-x-3 flex">
          <button className="bg-linear-to-r from-teal-600 to-teal-500 text-white  w-48 h-14 rounded-2xl font-medium">Explore NGos</button>
          <button className=" text-teal-600 border-2 border-teal-600 w-48 h-14 rounded-2xl font-medium">Register Your NGO</button>
        </div>
      </div>
    </div>





  );
}
