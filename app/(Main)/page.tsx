import Image from "next/image";
import { Heart } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Users } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Disc2 } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { Share2 } from 'lucide-react';


export default function Home() {



  
  return (

    <div>

      <Image src="/hero-image.jpg" alt="hero image" className="object-cover opacity-20 z-1" fill></Image>
      
      <div className="relative flex flex-col bg-linear-to-r from-white to-white/0 h-screen px-20 justify-center z-10" >

        <div className="bg-teal-100 w-fit px-4 py-1 rounded-full flex gap-x-2 items-center">
          <Heart size={15} className="text-teal-500" /> 
          <p className="text-sm font-bold text-teal-500">Join the movement for change</p>
        </div>
        <p className="mt-8 text-7xl font-bold font-times">Amplify Your <br /> <span className="bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Impact Together</span></p>
        <p className="mt-5 text-xl text-gray-500">Connect with passionate NGOs, discover inspiring campaigns, and be  <br />part of stories that change the world. Your journey to make a <br></br> difference starts here.</p>
        <div className="mt-5 gap-x-3 flex">
          <button className="bg-linear-to-r from-teal-600 to-teal-500 text-white gap-x-1 flex flex-row justify-center items-center  w-48 h-14 rounded-2xl font-medium">Explore NGos <ArrowRight size={17} /></button>
          <button className=" text-teal-600 border-2 border-teal-600 w-48 h-14 rounded-2xl font-medium">Register Your NGO</button>
        </div>
        <div className="flex mt-10 gap-x-10">

          <div className="flex gap-x-2">
            <div className="bg-teal-100 flex items-center justify-center rounded-2xl w-12">
              <Users className="text-teal-600" />
            </div>
            <div>
              <p className="text-2xl font-serif font-semibold">5,000+</p>
              <p className="text-sm text-gray-500">Active NGOs</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="bg-teal-100 flex items-center justify-center rounded-2xl w-12">
              <Globe className="text-teal-600" />
            </div>
            <div>
              <p className="text-2xl font-serif font-semibold">120+</p>
              <p className="text-sm text-gray-500">Countries</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="bg-teal-100 flex items-center justify-center rounded-2xl w-12">
              <Heart className="text-teal-600" />
            </div>
            <div>
              <p className="text-2xl font-serif font-semibold">2M+</p>
              <p className="text-sm text-gray-500">Lives impacted</p>
            </div>
          </div>
        </div>
      </div>
      
        <div className="h-screen px-20 mt-20">
          <p className="text-md text-teal-600 font-semibold">Featured Organizations</p>
          <p className="mt-2 text-5xl font-serif font-semibold">Meet Our Impact Makers</p>

          <div className="grid grid-cols-4 mt-10 gap-5">

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>
            
            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>

          </div>
          <div className="mt-15 flex justify-center">
            <button className="bg-linear-to-r from-teal-600 to-teal-500 text-white py-3 px-6 font-medium rounded-2xl">Explore All NGOs</button>
          </div>
        </div>

        

        <div className="h-screen mx-20 mt-15">

          <div className="flex flex-col items-center">
            <p className="text-md text-teal-600 font-semibold">Active Campaigns</p>
            <p className="mt-1 text-5xl font-serif font-semibold">Support Causes That Matter</p>
            <p className="mt-3 text-gray-500 text-lg">Discover ongoing campaigns from verified NGOs and make your contribution count.</p>
          </div>
          <div className="grid grid-cols-3 mt-15 gap-5">

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-56 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-teal-500 text-sm font-semibold">Water for Life Foundation</p>
                <p className="text-xl font-serif font-medium mt-2">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <p className="text-sm text-black font-medium">$98,500</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-sm text-gray-500">of $150,000</p>
                  </div>
                </div>

                <div className="bg-teal-500 h-2 mt-3 rounded-xl"></div>

                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <Disc2 size={15} />
                    <p className="text-sm text-gray-500">2,340 supporters</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Clock3 size={15} />
                    <p className="text-sm text-gray-500">18 days left</p>
                  </div>
                </div>
              
                <div className="flex items-center gap-x-3">
                  <button className="flex-8 border border-gray-300 mt-4  py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
                  <button className="flex-1 flex items-center justify-center border  border-gray-300 mt-4  py-2 rounded-lg font-medium hover:bg-teal-500 hover:text-white transition-all duration-200"><Share2 size={15} /> </button>
                  
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-2xl">
              <div className="w-full h-48 relative">
                <Image src="/explore.jpg" alt="image" fill className="object-cover rounded-t-2xl" />
              </div>
              <div className="p-5">
                <p className="text-xl font-serif font-medium">Ocean Guardians</p>
                <p className="text-md text-gray-600 text-sm " >Protecting marine ecosystems through community-driven conservation efforts.</p>
                <div className="flex justify-between mt-3" >
                  <div className="flex items-center gap-x-1">
                    <MapPin size={15} />
                    <p className="text-sm text-gray-500">California, USA</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users size={15} />
                    <p className="text-sm text-gray-500">12,500</p>
                  </div>
                </div>
                <button className="border border-gray-300 mt-4 w-full py-2 rounded-xl font-medium hover:bg-teal-500 hover:text-white transition-all duration-200">View Profile</button>
              </div>
            </div>

          </div>
          <div className="mt-10 flex justify-center">
            <button className="border border-teal-500 text-teal-500 py-3 px-6 font-medium rounded-2xl">View All Campaigns</button>
          </div>

        </div>

    </div>





  );
}
