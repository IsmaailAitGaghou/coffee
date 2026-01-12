// 'use client'
import Link from "next/link";

export default function NotFound() {
   return (
      <main className="min-h-screen bg-[#0f0f0f] text-[#f5e6d3] flex items-center justify-center px-6">
         <div className="w-full max-w-2xl text-center">
            <h1 className="text-5xl md:text-6xl font-semibold">
               404 — Not Found
            </h1>
            <p className="mt-4 text-white/70">
               This page doesn’t exist. Let’s get you back to BrewHouse.
            </p>
            <div className="mt-8 flex justify-center gap-3">
               <Link
                  href="/"
                  className="rounded-2xl px-5 py-3 bg-[#c9a24d] text-black font-medium"
               >
                  Back to Home
               </Link>
            </div>
         </div>
      </main>
   );
}

