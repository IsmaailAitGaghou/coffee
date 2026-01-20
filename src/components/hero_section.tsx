"use client";
import React from "react";
import Image from "next/image";
import '@/app/globals.css';



const HeroSection = () => {
   return (
      <>
         <section className="min-h-screen relative ">
            <div>
               <video
                  src="./coffee-bean-cup-3d.mp4"
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4B2E2A] opacity-95"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
               <h1
                  className={`text-6xl font-extrabold text-center max-w-4xl px-4`}
               >
                  <span className="text-[#FEBD02]">Brewed</span> for Thinkers.{" "}
                  <span className="text-[#FEBD02]">Crafted</span> for Creators.
               </h1>
            </div>

            <div className="absolute -bottom-8 w-full">
               <Image
                  src="./wave-image.svg"
                  alt="Coffee Bean Cup"
                  width={1920}
                  height={200}
               />
            </div>
         </section>
      </>
   );
};

export default HeroSection;
